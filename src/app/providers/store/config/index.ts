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

import { IAuthSchema } from "@features";
import { createReducerManager } from "./reducer-manager";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  popups: IPopupsSchema;
  authForm?: IAuthSchema;
}

export type IStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction,
  ) => CombinedState<IStateSchema>;
  add: (key: IStateSchemaKey, reducer: Reducer) => void;
  remove: (key: IStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    popups: popupsReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
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
