import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { IBuildPaths } from "../webpack/types";

export function buildPlugins(
  paths: IBuildPaths,
  isDev: boolean
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html, // передати темплейт файлу який буде використаний як шаблон
    }),
    new webpack.ProgressPlugin(), // вивід прогресу збірки
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
      })
    );
  }

  return plugins;
}
