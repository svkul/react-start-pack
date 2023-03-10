import { IStateSchema } from "@app/providers";

export const getProfileForm = (state: IStateSchema) => state.profile?.form;

export const getProfileCountry = (state: IStateSchema) =>
  state.profile?.form?.country || "";

export const getProfileError = (state: IStateSchema) =>
  state.profile?.error || "";

export const getProfileIsLoading = (state: IStateSchema) =>
  state.profile?.isLoading || false;

export const getProfileName = (state: IStateSchema) =>
  state.profile?.form?.name || "";

export const getProfileIsReadOnly = (state: IStateSchema) =>
  state.profile?.readonly || false;
