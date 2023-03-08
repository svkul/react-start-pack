import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthUsername } from ".";

describe("get auth username", () => {
  test("should return username value", () => {
    const state: DeepPartial<IStateSchema> = {
      authForm: {
        isLoading: false,
        username: "test",
        password: "",
        error: "",
      },
    };

    expect(getAuthUsername(state as IStateSchema)).toEqual("test");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getAuthUsername(state as IStateSchema)).toEqual("");
  });
});
