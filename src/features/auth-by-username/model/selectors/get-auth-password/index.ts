import { IStateScheme } from "@app/providers";

export const getAuthPassword = (state: IStateScheme) =>
  state?.loginForm?.password || "";
