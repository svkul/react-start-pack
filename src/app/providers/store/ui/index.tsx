import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

import { createReduxStore, IStateScheme } from "../config";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<IStateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateScheme>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState as IStateScheme,
    asyncReducers as ReducersMapObject<IStateScheme>,
  );

  return <Provider store={store}>{children}</Provider>;
};
