import { IStateSchema } from "@app/providers";

export const getIsAuthPopupOpen = (state: IStateSchema) =>
  state.popups.isAuthPopupOpen;
