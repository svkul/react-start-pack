import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

import { createReduxStore, IStateSchema } from "../config";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};
