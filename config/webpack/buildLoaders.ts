import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx")$/,
    use: {
      loader: "babel-loader",
      options: {
        plugins: [isDev && require.resolve("react-refresh/babel")].filter(
          Boolean,
        ),
      },
    },
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            auto: (resourcePath: string) =>
              resourcePath.includes(".module.css"),
            localIdentName: isDev
              ? "[path][local]--[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },
      },
    ],
  };

  return [fileLoader, babelLoader, tsLoader, cssLoader];
}
