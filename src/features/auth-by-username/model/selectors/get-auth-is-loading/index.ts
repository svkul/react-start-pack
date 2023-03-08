import { IStateScheme } from "@app/providers";

export const getAuthIsLoading = (state: IStateScheme) =>
  state?.loginForm?.isLoading || false;
