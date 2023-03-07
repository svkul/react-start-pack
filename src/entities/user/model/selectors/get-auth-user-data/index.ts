import { IStateScheme } from "@app/providers";

export const getUserAuthData = (state: IStateScheme) => state.user.authData;
