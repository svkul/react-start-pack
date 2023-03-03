import path from "path";
import webpack from "webpack";

import { IBuildPaths } from "./types";

export function buildResolvers(paths: IBuildPaths): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@app": paths.app,
      "@assets": paths.assets,
      "@entities": paths.entities,
      "@features": paths.features,
      "@pages": paths.pages,
      "@shared": paths.shared,
      "@widgets": paths.widgets,
    },
  };
}
