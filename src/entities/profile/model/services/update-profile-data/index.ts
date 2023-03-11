import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "@app/i18n/index";

import { IStateSchema, IThunkExtraArg } from "@app/providers";
import { ValidationError } from "@app/api";
import { IProfile } from "../../types";
import { getProfileForm } from "@entities";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  { rejectValue: string; extra: IThunkExtraArg; state: IStateSchema }
>("profile/updateData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());

  try {
    const response = await extra.api.put<IProfile>("/profile", formData);

    if (!response.data) {
      throw new Error("Invalid response");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return rejectWithValue(error.response?.data.message || "");
    } else {
      return rejectWithValue(i18n.t("server-error"));
    }
  }
});
