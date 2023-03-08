import { IStateSchema } from "@app/providers";

export const getAuthError = (state: IStateSchema) =>
  state?.authForm?.error || "";
