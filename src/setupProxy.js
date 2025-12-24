const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/yelp",
    createProxyMiddleware({
      target: "https://api.yelp.com",
      changeOrigin: true,
      pathRewrite: { "^/yelp": "" },
    })
  );
};
