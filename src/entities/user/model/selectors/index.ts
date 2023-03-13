import { IStateSchema } from "@app/providers";

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
export const getUserIsMounted = (state: IStateSchema) => state.user._mounted;
