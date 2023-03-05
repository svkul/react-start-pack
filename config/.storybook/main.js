// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  stories: [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@app": path.resolve(__dirname, "..", "..", "src", "app"),
      "@assets": path.resolve(__dirname, "..", "..", "src", "app", "assets"),
      "@entities": path.resolve(__dirname, "..", "..", "src", "entities"),
      "@features": path.resolve(__dirname, "..", "..", "src", "features"),
      "@pages": path.resolve(__dirname, "..", "..", "src", "pages"),
      "@shared": path.resolve(__dirname, "..", "..", "src", "shared"),
      "@widgets": path.resolve(__dirname, "..", "..", "src", "widgets"),
    };

    return config;
  },
};
