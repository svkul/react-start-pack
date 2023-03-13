import { IStateSchema } from "@app/providers";

export const selectArticlesData = (state: IStateSchema) => state.articles?.data;

export const selectArticlesIsLoading = (state: IStateSchema) =>
  state.articles?.isLoading;

export const selectArticlesError = (state: IStateSchema) =>
  state.articles?.error;
