import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import {
  counterReducer,
  ICounterSchema,
  IUserSchema,
  userReducer,
} from "@entities";

import { ILoginSchema, loginReducer } from "@features";

export interface IStateScheme {
  counter: ICounterSchema;
  user: IUserSchema;
  loginForm: ILoginSchema;
}

export function createReduxStore(initialState?: IStateScheme) {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<IStateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
