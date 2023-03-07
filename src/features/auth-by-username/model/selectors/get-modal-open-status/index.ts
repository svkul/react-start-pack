import { IStateScheme } from "@app/providers";

export const getIsModalOpen = (state: IStateScheme) =>
  state.loginForm.isModalOpen;
