declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.jpeg" {
  const path: string;
  export default path;
}

declare module "*.gif" {
  const path: string;
  export default path;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
