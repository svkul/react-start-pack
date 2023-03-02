import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export function buildOptimization(isDev: boolean) {
  const optimization: any = {};

  if (!isDev) {
    optimization.minimizer = [
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ];
  }

  return optimization;
}
