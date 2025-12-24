import { useState } from "react";
import Yelp from "../../utils/Yelp";

import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy)
      .then((results) => {
        setBusinesses(results);
      })
      .catch((error) => {
        console.error("❌ Yelp error:", error);
      });
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
