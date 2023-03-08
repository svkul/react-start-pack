import { IStateSchema } from "@app/providers";

export const getAuthIsLoading = (state: IStateSchema) =>
  state?.authForm?.isLoading || false;
