import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const tsLoader = {
    // обробка ts та tsx файлів
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsLoader];
}
