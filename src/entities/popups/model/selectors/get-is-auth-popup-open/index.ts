import { IStateScheme } from "@app/providers";

export const getIsAuthPopupOpen = (state: IStateScheme) =>
  state.popups.isAuthPopupOpen;
