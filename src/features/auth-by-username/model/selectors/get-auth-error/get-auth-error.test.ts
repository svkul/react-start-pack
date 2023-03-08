import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthError } from ".";

describe("get auth error", () => {
  test("should return error value", () => {
    const state: DeepPartial<IStateSchema> = {
      authForm: { isLoading: false, username: "", password: "", error: "lol" },
    };

    expect(getAuthError(state as IStateSchema)).toEqual("lol");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getAuthError(state as IStateSchema)).toEqual("");
  });
});
