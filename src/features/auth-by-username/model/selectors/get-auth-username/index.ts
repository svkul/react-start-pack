import { IStateScheme } from "@app/providers";

export const getAuthUsername = (state: IStateScheme) =>
  state?.loginForm?.username || "";
