import { IStateSchema } from "@app/providers";

export const getProfileIsLoading = (state: IStateSchema) =>
  state.profile?.isLoading || false;
