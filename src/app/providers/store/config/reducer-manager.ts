import {
  Reducer,
  AnyAction,
  combineReducers,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { IStateSchemeKey, IStateScheme, IReducerManager } from ".";

export function createReducerManager(
  initialReducers: ReducersMapObject<IStateScheme>,
): IReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: IStateSchemeKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: IStateScheme, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: IStateSchemeKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: IStateSchemeKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
