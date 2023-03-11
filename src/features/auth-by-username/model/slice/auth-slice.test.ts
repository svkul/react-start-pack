import { DeepPartial } from "@reduxjs/toolkit";
import { IAuthSchema } from "../types";
import { authReducer, authActions } from "./index";

describe("Auth slice", () => {
  test("should update username value", () => {
    const state: DeepPartial<IAuthSchema> = { username: "" };

    expect(
      authReducer(state as IAuthSchema, authActions.setUserName("test")),
    ).toEqual({ username: "test" });
  });

  test("should update password value", () => {
    const state: DeepPartial<IAuthSchema> = { password: "" };

    expect(
      authReducer(state as IAuthSchema, authActions.setPassword("test")),
    ).toEqual({ password: "test" });
  });

  test("should reset state values", () => {
    const state: DeepPartial<IAuthSchema> = {
      password: "123",
      username: "test",
    };

    expect(authReducer(state as IAuthSchema, authActions.reset())).toEqual({
      isLoading: false,
      username: "",
      password: "",
    });
  });
});
