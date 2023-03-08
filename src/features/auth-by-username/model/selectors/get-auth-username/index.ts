import { IStateSchema } from "@app/providers";

export const getAuthUsername = (state: IStateSchema) =>
  state?.authForm?.username || "";
