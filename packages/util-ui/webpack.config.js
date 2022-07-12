const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "shoppe",
    projectName: "util-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
    },
  });
};
