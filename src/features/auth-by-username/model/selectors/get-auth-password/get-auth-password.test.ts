import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthPassword } from ".";

describe("get auth password", () => {
  test("should return password value", () => {
    const state: DeepPartial<IStateSchema> = {
      authForm: {
        isLoading: false,
        username: "",
        password: "test",
        error: "",
      },
    };

    expect(getAuthPassword(state as IStateSchema)).toEqual("test");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getAuthPassword(state as IStateSchema)).toEqual("");
  });
});
