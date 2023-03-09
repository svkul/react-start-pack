import { useStore } from "react-redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import { IReduxStoreWithManager, IStateSchemaKey } from "@app/providers";

export interface IUseDynamicModuleLoader {
  key: IStateSchemaKey;
  reducer: Reducer<any, AnyAction>;
  removeAfterUnmount?: boolean;
}

export type IReducersList = {
  [name in IStateSchemaKey]?: Reducer;
};

export const useDynamicReducerLoader = (modules: IUseDynamicModuleLoader[]) => {
  const store = useStore() as IReduxStoreWithManager;

  const addStoreDynamicModules = () => {
    const currentStore = store.getState();

    modules.forEach(module => {
      if (!currentStore[module.key]) {
        store.reducerManager.add(module.key, module.reducer);
      }
    });
  };

  const removeStoreDynamicModules = () => {
    modules.forEach(module => {
      if (module.removeAfterUnmount) {
        store.reducerManager.remove(module.key);
      }
    });
  };

  return {
    addStoreDynamicModules,
    removeStoreDynamicModules,
  };
};
