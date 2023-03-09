import { IStateSchema } from "@app/providers";

export const getProfileCountry = (state: IStateSchema) =>
  state.profile?.data?.country || "";
