export type TBuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  app: string;
  entities: string;
  pages: string;
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
