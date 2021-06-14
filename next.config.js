const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? "/codename-for-three-teams" : "",
};
