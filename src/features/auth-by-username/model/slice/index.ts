import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authByUsername } from "../services/auth-by-username";
import { IAuthSchema } from "../types";

const initialState: IAuthSchema = {
  isLoading: false,
  username: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(authByUsername.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authByUsername.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(authByUsername.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }

        state.isLoading = false;
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
