import { getArticleData } from "../services";
import { IArticle, IArticleSchema } from "../types";
import { articleReducer } from "./index";

const state: IArticleSchema = {
  isLoading: false,
  data: undefined,
  error: "",
};

describe("articles slice", () => {
  test("test articles service pending", () => {
    expect(articleReducer(state, getArticleData.pending)).toEqual({
      ...state,
      isLoading: true,
      error: undefined,
    });
  });

  test("test articles service fullfiled", () => {
    expect(
      articleReducer(
        state,
        getArticleData.fulfilled(state.data as IArticle, "", "1"),
      ),
    ).toEqual({
      ...state,
    });
  });

  test("test articles service reject", () => {
    expect(articleReducer(state, getArticleData.rejected)).toEqual({
      ...state,
      isLoading: false,
      error: "",
    });
  });
});
