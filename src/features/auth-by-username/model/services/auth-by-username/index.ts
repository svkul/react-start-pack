import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { USER_LOCALSTORAGE_KEY } from "@app/config";

import { IUser, popupsActions, userActions } from "@entities";
import { authActions } from "@features";
import { IThunkExtraArg } from "@app/providers";
import { IErrorResponse } from "@app/api";

interface IAuthByUsernameProps {
  username: string;
  password: string;
}

export const authByUsername = createAsyncThunk<
  IUser,
  IAuthByUsernameProps,
  { rejectValue: string; extra: IThunkExtraArg }
>("login/loginByUsername", async (userInfo, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post<IUser>("/login", userInfo);

    if (!response.data) {
      throw new Error("Invalid response");
    }

    dispatch(userActions.setAuthData(response.data));
    dispatch(popupsActions.setIsAuthPopupOpen(false));
    dispatch(authActions.reset());
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    const err: AxiosError<IErrorResponse> = error as any;
    if (!err.response) {
      throw error;
    }

    return rejectWithValue(err.response.statusText);
  }
});
