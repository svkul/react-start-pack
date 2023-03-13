import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";
import { Location } from "react-router";

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
  IProfileSchema,
  IArticlesSchema,
  IArticleSchema,
} from "@entities";

import { IAuthSchema } from "@features";
import { $api } from "@app/api";
import { createReducerManager } from "./reducer-manager";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  popups: IPopupsSchema;
  authForm?: IAuthSchema;
  profile?: IProfileSchema;
  articles?: IArticlesSchema;
  article?: IArticleSchema;
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

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
  location?: Location;
}

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
  location?: Location,
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    popups: popupsReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = {
    api: $api,
    navigate,
    location,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
