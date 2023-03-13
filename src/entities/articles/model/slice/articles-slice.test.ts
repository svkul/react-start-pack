import { IArticle } from "@entities/article/model/types";

import { getArticlesData } from "../services";
import { IArticlesSchema } from "../types";
import { articlesReducer } from "./index";

const state: IArticlesSchema = {
  isLoading: false,
  data: undefined,
  error: "",
};

describe("articles slice", () => {
  test("test articles service pending", () => {
    expect(articlesReducer(state, getArticlesData.pending)).toEqual({
      ...state,
      isLoading: true,
      error: undefined,
    });
  });

  test("test articles service fullfiled", () => {
    expect(
      articlesReducer(
        state,
        getArticlesData.fulfilled(state.data as IArticle[], ""),
      ),
    ).toEqual({
      ...state,
    });
  });

  test("test articles service reject", () => {
    expect(articlesReducer(state, getArticlesData.rejected)).toEqual({
      ...state,
      isLoading: false,
      error: "",
    });
  });
});
