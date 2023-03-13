import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IArticle } from "@entities/article/model/types";

import { IThunkExtraArg } from "@app/providers";
import { IErrorResponse } from "@app/api";

export const getArticlesData = createAsyncThunk<
  IArticle[],
  void,
  { rejectValue: string; extra: IThunkExtraArg }
>("articles/getData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IArticle[]>("/articles");

    if (!response.data) {
      throw new Error("Invalid response");
    }

    return response.data;
  } catch (error) {
    const err: AxiosError<IErrorResponse> = error as any;
    if (!err.response) {
      throw error;
    }

    return rejectWithValue(err.response.statusText);
  }
});
