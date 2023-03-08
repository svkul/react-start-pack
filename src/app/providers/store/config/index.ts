import {
  AnyAction,
  CombinedState,
  configureStore,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import {
  counterReducer,
  ICounterSchema,
  IUserSchema,
  IPopupsSchema,
  userReducer,
  popupsReducer,
} from "@entities";

import { ILoginSchema } from "@features";
import { createReducerManager } from "./reducer-manager";

export interface IStateScheme {
  counter: ICounterSchema;
  user: IUserSchema;
  popups: IPopupsSchema;
  loginForm?: ILoginSchema;
}

export type IStateSchemeKey = keyof IStateScheme;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateScheme>;
  reduce: (
    state: IStateScheme,
    action: AnyAction,
  ) => CombinedState<IStateScheme>;
  add: (key: IStateSchemeKey, reducer: Reducer) => void;
  remove: (key: IStateSchemeKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateScheme> {
  reducerManager: IReducerManager;
}

export function createReduxStore(initialState?: IStateScheme) {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    popups: popupsReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateScheme>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
