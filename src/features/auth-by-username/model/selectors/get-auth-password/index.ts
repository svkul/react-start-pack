import { IStateSchema } from "@app/providers";

export const getAuthPassword = (state: IStateSchema) =>
  state?.authForm?.password || "";
