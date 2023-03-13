import { getProfileData, updateProfileData } from "@entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile, IProfileSchema } from "../types";

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  form: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;

      if (action.payload) {
        state.form = state.data;
      }
    },
    setNewDataValue: (state, action: PayloadAction<IProfile>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
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
          state.form = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getProfileData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }

        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.data = action.payload;
          state.form = action.payload;
          state.isLoading = false;
          state.readonly = true;
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }

        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
