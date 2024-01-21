const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
