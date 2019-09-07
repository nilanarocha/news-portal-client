let config = {
  API_URL: "http://localhost:3000"
};

// if is running in Heroku, use news portal server API.
// Checking that via host information
const isProduction = window.location.host.includes("heroku");
if (isProduction) {
  config.API_URL = "https://news-portal-server-api.herokuapp.com";
}
export default config;
