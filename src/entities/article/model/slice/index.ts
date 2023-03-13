import { getArticleData } from "../services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, IArticleSchema } from "../types";

const initialState: IArticleSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticleData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getArticleData.fulfilled,
        (state, action: PayloadAction<IArticle>) => {
          state.data = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getArticleData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }

        state.isLoading = false;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
