let config = {
  API_URL: "http://localhost:3000"
};
const isProduction =
  process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production";
// if is running in Heroku, use news portal server API.
if (isProduction) {
  config.API_URL = "https://news-portal-server-api.herokuapp.com";
}
export default config;
