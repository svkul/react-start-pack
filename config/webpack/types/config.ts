export type TBuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  app: string;
  assets: string;
  entities: string;
  features: string;
  pages: string;
  shared: string;
  widgets: string;
}

export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}
