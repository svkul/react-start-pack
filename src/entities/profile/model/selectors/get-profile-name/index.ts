import { IStateSchema } from "@app/providers";

export const getProfileName = (state: IStateSchema) =>
  state.profile?.data?.name || "";
