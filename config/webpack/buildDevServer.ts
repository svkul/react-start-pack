import { IBuildOptions } from "./types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: false, // overlay: false відмінити вивід помилок в iframe
    },
  };
}
