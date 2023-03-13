export const enum EArticleType {
  RANDOM = "RANDOM",
}

export const enum EArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface IArticleBlock {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleTextBlock extends IArticleBlock {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraph: string[];
}

export interface IArticleCodeBlock extends IArticleBlock {
  type: EArticleBlockType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlock {
  type: EArticleBlockType.IMAGE;
  src: string;
  alt: string;
}

export type TArticleBlock =
  | IArticleTextBlock
  | IArticleCodeBlock
  | IArticleImageBlock;

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  userId: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  blocks: TArticleBlock[];
}

export interface IArticleSchema {
  data?: IArticle;
  isLoading: boolean;
  error?: string;
}
