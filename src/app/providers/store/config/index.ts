import { configureStore } from "@reduxjs/toolkit";

import { counterReducer, ICounterSchema } from "@entities";

export interface IStateScheme {
  counter: ICounterSchema;
}

export function createReduxStore(initialState?: IStateScheme) {
  return configureStore<IStateScheme>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
