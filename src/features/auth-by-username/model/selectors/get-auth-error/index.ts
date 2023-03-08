import { IStateScheme } from "@app/providers";

export const getAuthError = (state: IStateScheme) =>
  state?.loginForm?.error || "";
