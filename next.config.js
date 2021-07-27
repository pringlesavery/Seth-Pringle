
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['dpc54q5KYjLeYPsGJ7xyYd'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  