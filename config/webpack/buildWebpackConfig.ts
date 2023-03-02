import webpack from "webpack";
import { buildPlugins, buildLoaders, buildResolvers } from "./index";

import { IBuildOptions } from "./types";

export function buildWebpackConfig(
  options: IBuildOptions
): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode, // модифікація збірки
    entry: paths.entry, // вхідна точка застосунку
    output: {
      // налаштування куди і як робити збірку
      filename: "[name].[contenthash].js", // шаблон для попередження кешування файлу
      path: paths.build,
      clean: true, // очищення файлів в папці збірки перед новою збіркою
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(), // вказуємо розширення для тих файлив при import яких ми не будемо вказувати розширення
  };
}
