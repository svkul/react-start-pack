import webpack from "webpack";
import {
  buildPlugins,
  buildLoaders,
  buildResolvers,
  buildDevServer,
  buildOptimization,
} from "./index";

import { IBuildOptions } from "./types";

export function buildWebpackConfig(
  options: IBuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev, apiUrl, project } = options;

  return {
    mode, // модифікація збірки
    entry: paths.entry, // вхідна точка застосунку
    output: {
      // налаштування куди і як робити збірку
      filename: "[name].[contenthash].js", // шаблон для попередження кешування файлу
      path: paths.build,
      clean: true, // очищення файлів в папці збірки перед новою збіркою
    },
    plugins: buildPlugins(paths, isDev, apiUrl, project),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths), // вказуємо розширення для тих файлив при import яких ми не будемо вказувати розширення
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: buildOptimization(isDev),
  };
}
