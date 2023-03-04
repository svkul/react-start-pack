import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export function buildOptimization(isDev: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
