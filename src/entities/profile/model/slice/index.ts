import { getProfileData } from "@entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile, IProfileSchema } from "../types";

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.data = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
