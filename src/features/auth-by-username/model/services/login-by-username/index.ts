import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "@app/i18n/index";

import { USER_LOCALSTORAGE_KEY } from "@app/config";

import { IUser, userActions } from "@entities";
import { loginActions } from "@features";

export interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
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
    thunkAPI.dispatch(loginActions.reset());
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message || "");
    } else {
      return thunkAPI.rejectWithValue(i18n.t("globa-error"));
    }
  }
});
