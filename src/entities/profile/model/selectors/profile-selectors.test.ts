import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import {
  getProfileForm,
  getProfileName,
  getProfileCountry,
  getProfileError,
  getProfileIsLoading,
  getProfileIsReadOnly,
} from ".";

const initialState = {
  data: {
    name: "Serhii",
    country: "Ukraine",
  },
  form: {
    name: "Serhii",
    country: "Ukraine",
  },
  isLoading: false,
  error: "",
  readonly: true,
};

describe("profile selects", () => {
  test("should return profile object", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileForm(state as IStateSchema)).toEqual(initialState.form);
  });

  test("should return profile name", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileName(state as IStateSchema)).toEqual(
      initialState.form.name,
    );
  });

  test("should return profile country", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileCountry(state as IStateSchema)).toEqual(
      initialState.form.country,
    );
  });

  test("should return profile error", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileError(state as IStateSchema)).toEqual(initialState.error);
  });

  test("should return profile isLoading status", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(
      initialState.isLoading,
    );
  });

  test("should return profile readOnly status", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: initialState,
    };

    expect(getProfileIsReadOnly(state as IStateSchema)).toEqual(
      initialState.readonly,
    );
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
