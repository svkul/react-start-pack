import { IArticle } from "@entities/article/model/types";

export interface IArticlesSchema {
  data?: IArticle[];
  isLoading: boolean;
  error?: string;
}
