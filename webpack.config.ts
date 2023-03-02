import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/webpack";
import { IBuildOptions, TBuildMode } from "./config/webpack/types";

const mode: TBuildMode = "development";

const options: IBuildOptions = {
  mode,
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
  isDev: mode === "development",
};

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
