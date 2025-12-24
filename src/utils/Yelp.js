// src/utils/Yelp.js

const apiKey = process.env.REACT_APP_YELP_API_KEY;

// CRA dev-proxy route (setupProxy.js forwards /yelp to https://api.yelp.com)
const YELP_API = "/yelp/v3/businesses/search";

const Yelp = {
  async search(term, location, sortBy) {
    // Don't search if inputs are empty
    if (!term?.trim() || !location?.trim()) return [];

    const termSafe = encodeURIComponent(term);
    const locationSafe = encodeURIComponent(location);

    const url = `${YELP_API}?term=${termSafe}&location=${locationSafe}&sort_by=${sortBy}&limit=20`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    const json = await response.json();

    // Helpful debug if something goes wrong
    if (!response.ok) {
      const desc = json?.error?.description;
      const code = json?.error?.code;

      console.log("❌ Yelp status:", response.status);
      console.log("❌ Yelp error code:", code);
      console.log("❌ Yelp error description:", desc);
      console.log("❌ Full Yelp error JSON:", JSON.stringify(json));

      return [];
    }

    if (!json.businesses) return [];

    return json.businesses.map((b) => ({
      id: b.id,
      imageSrc: b.image_url,
      name: b.name,
      address: b.location?.address1 || "",
      city: b.location?.city || "",
      state: b.location?.state || "",
      zipCode: b.location?.zip_code || "",
      category: b.categories?.[0]?.title || "",
      rating: b.rating,
      reviewCount: b.review_count,
    }));
  },
};

export default Yelp;
