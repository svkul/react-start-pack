import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "@app/i18n/index";

import { USER_LOCALSTORAGE_KEY } from "@app/config";

import { IUser, popupsActions, userActions } from "@entities";
import { authActions } from "@features";

export interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

interface IAuthByUsernameProps {
  username: string;
  password: string;
}

export const authByUsername = createAsyncThunk<
  IUser,
  IAuthByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post<IUser>(
      "http://localhost:8000/login",
      userInfo,
    );

    if (!response.data) {
      throw new Error("Invalid response");
    }

    thunkAPI.dispatch(userActions.setAuthData(response.data));
    thunkAPI.dispatch(popupsActions.setIsAuthPopupOpen(false));
    thunkAPI.dispatch(authActions.reset());
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message || "");
    } else {
      return thunkAPI.rejectWithValue(i18n.t("global-error"));
    }
  }
});
