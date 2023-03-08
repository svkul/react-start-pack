import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthIsLoading } from ".";

describe("get auth isLoading", () => {
  test("should return isLoading value", () => {
    const state: DeepPartial<IStateSchema> = {
      authForm: { isLoading: false, username: "", password: "", error: "" },
    };

    expect(getAuthIsLoading(state as IStateSchema)).toEqual(false);
  });

  test("should return isLoading value", () => {
    const state: DeepPartial<IStateSchema> = {
      authForm: { isLoading: true, username: "", password: "", error: "" },
    };

    expect(getAuthIsLoading(state as IStateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getAuthIsLoading(state as IStateSchema)).toEqual(false);
  });
});
