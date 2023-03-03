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
      "@entities": paths.entities,
      "@pages": paths.pages,
    },
  };
}
