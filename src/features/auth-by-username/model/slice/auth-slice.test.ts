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
});
