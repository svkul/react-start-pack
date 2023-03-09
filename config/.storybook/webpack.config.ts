import path from "path";
import webpack, { DefinePlugin } from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  if (config.resolve && config.resolve.alias) {
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
  }

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify("http://localhost:8000"),
    }),
  );

  return config;
};
