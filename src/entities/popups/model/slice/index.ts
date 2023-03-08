import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPopupsSchema } from "../types";

const initialState: IPopupsSchema = {
  isAuthPopupOpen: false,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setIsAuthPopupOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthPopupOpen = action.payload;
    },
  },
});

export const { actions: popupsActions } = popupsSlice;
export const { reducer: popupsReducer } = popupsSlice;
