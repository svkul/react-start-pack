import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import {
  selectArticleData,
  selectArticleError,
  selectArticleIsLoading,
} from ".";

const initialState = {
  data: undefined,
  isLoading: false,
  error: "",
};

describe("profile selects", () => {
  test("should return article object", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticleData(state as IStateSchema)).toEqual(initialState.data);
  });

  test("should return article error", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticleError(state as IStateSchema)).toEqual(
      initialState.error,
    );
  });

  test("should return article isLoading status", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticleIsLoading(state as IStateSchema)).toEqual(
      initialState.isLoading,
    );
  });
});
