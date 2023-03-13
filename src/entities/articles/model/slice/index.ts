import { getArticlesData } from "../services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticle } from "@entities/article/model/types";
import { IArticlesSchema } from "../types";

const initialState: IArticlesSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticlesData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getArticlesData.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.data = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getArticlesData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }

        state.isLoading = false;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
