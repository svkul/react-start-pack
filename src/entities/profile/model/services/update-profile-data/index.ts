import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IStateSchema, IThunkExtraArg } from "@app/providers";
import { IErrorResponse } from "@app/api";
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
    const err: AxiosError<IErrorResponse> = error as any;
    if (!err.response) {
      throw error;
    }

    return rejectWithValue(err.response.statusText);
  }
});
