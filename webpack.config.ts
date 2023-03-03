import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/webpack";
import { IBuildOptions, IBuildEnv } from "./config/webpack/types";

export default (env: IBuildEnv) => {
  const options: IBuildOptions = {
    mode: env.mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      app: path.resolve(__dirname, "src", "app"),
      entities: path.resolve(__dirname, "src", "entities"),
      pages: path.resolve(__dirname, "src", "pages"),
    },
    isDev: env.mode === "development",
    port: env.port,
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};
