import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import {
  counterReducer,
  ICounterSchema,
  IUserSchema,
  userReducer,
} from "@entities";

export interface IStateScheme {
  counter: ICounterSchema;
  user: IUserSchema;
}

export function createReduxStore(initialState?: IStateScheme) {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IStateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
