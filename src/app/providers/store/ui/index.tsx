import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial } from "@reduxjs/toolkit";

import { createReduxStore, IStateScheme } from "../config";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<IStateScheme>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState as IStateScheme);

  return <Provider store={store}>{children}</Provider>;
};
