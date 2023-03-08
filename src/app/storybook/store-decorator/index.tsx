import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

import { IStateScheme, StoreProvider } from "@app/providers";
import { loginReducer } from "@features";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateScheme>> = {};

export const StoreDecorator = ({
  state,
  asyncReducers,
}: {
  state: DeepPartial<IStateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateScheme>>;
}) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
};
