import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

import { IStateSchema, StoreProvider } from "@app/providers";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {};

export const StoreDecorator = ({
  state,
  asyncReducers,
}: {
  state: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
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
