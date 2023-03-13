import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkExtraArg } from "@app/providers";
import { IErrorResponse } from "@app/api";
import { IArticle } from "../../types";

export const getArticleData = createAsyncThunk<
  IArticle,
  string,
  { rejectValue: string; extra: IThunkExtraArg }
>("article/getData", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

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
