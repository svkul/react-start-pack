import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import { IBuildPaths } from "../webpack/types";

export function buildPlugins(
  paths: IBuildPaths
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html, // передати темплейт файлу який буде використаний як шаблон
    }),
    new webpack.ProgressPlugin(), // вивід прогресу збірки
  ];
}
