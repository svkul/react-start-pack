import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "@app/i18n/index";

import { IThunkExtraArg } from "@app/providers";
import { ValidationError } from "@app/api";
import { IProfile } from "../../types";

export const getProfileData = createAsyncThunk<
  IProfile,
  void,
  { rejectValue: string; extra: IThunkExtraArg }
>("profile/getData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IProfile>("/profile");

    if (!response.data) {
      throw new Error("Invalid response");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return rejectWithValue(error.response?.data.message || "");
    } else {
      return rejectWithValue(i18n.t("global-error"));
    }
  }
});
