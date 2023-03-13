import { updateProfileData } from "@entities";
import { IProfile, IProfileSchema } from "../types";
import { profileReducer, profileActions } from "./index";

const state: IProfileSchema = {
  isLoading: false,
  readonly: true,
  data: {
    name: "Serhii",
    country: "Ukraine",
  },
  form: {
    name: "Serhii",
    country: "Ukraine",
  },
  error: "",
};

describe("profile slice", () => {
  test("should change readOnly status", () => {
    expect(profileReducer(state, profileActions.setIsReadOnly(false))).toEqual({
      ...state,
      readonly: false,
    });
  });

  test("should change data value status", () => {
    expect(
      profileReducer(
        state,
        profileActions.setNewDataValue({ name: "Vlad", country: "Germany" }),
      ),
    ).toEqual({
      ...state,
      data: {
        name: "Serhii",
        country: "Ukraine",
      },
      form: { name: "Vlad", country: "Germany" },
    });
  });

  test("test update profile service pending", () => {
    expect(profileReducer(state, updateProfileData.pending)).toEqual({
      ...state,
      isLoading: true,
      error: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    expect(
      profileReducer(
        state,
        updateProfileData.fulfilled(state.data as IProfile, ""),
      ),
    ).toEqual({
      ...state,
    });
  });

  test("test update profile service reject", () => {
    expect(profileReducer(state, updateProfileData.rejected)).toEqual({
      ...state,
      isLoading: false,
      error: "",
    });
  });
});
