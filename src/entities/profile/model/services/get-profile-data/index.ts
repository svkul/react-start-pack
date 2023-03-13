import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IThunkExtraArg } from "@app/providers";
import { IErrorResponse } from "@app/api";
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
    const err: AxiosError<IErrorResponse> = error as any;
    if (!err.response) {
      throw error;
    }

    return rejectWithValue(err.response.statusText);
  }
});
