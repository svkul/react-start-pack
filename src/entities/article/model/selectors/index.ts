import { IStateSchema } from "@app/providers";

export const selectArticleData = (state: IStateSchema) => state.article?.data;

export const selectArticleIsLoading = (state: IStateSchema) =>
  state.article?.isLoading || false;

export const selectArticleError = (state: IStateSchema) =>
  state.article?.error || "";
