import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import {
  selectArticlesData,
  selectArticlesError,
  selectArticlesIsLoading,
} from ".";

const initialState = {
  data: undefined,
  isLoading: false,
  error: "",
};

describe("profile selects", () => {
  test("should return profile object", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticlesData(state as IStateSchema)).toEqual(
      initialState.data,
    );
  });

  test("should return profile error", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticlesError(state as IStateSchema)).toEqual(
      initialState.error,
    );
  });

  test("should return profile isLoading status", () => {
    const state: DeepPartial<IStateSchema> = {
      articles: initialState,
    };

    expect(selectArticlesIsLoading(state as IStateSchema)).toEqual(
      initialState.isLoading,
    );
  });
});
