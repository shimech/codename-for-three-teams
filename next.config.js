const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return { assetPrefix: "codename-for-three-teams" };
  }
  return {};
};
