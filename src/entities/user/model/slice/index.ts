import { createSlice } from "@reduxjs/toolkit";
import { IUserSchema } from "../types";

const initialState: IUserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
