import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";

import { IReducersList, IStateSchema, StoreProvider } from "@app/providers";
import { authReducer } from "@features";
import { profileReducer } from "@entities";

const defaultAsyncReducers: IReducersList = {
  authForm: authReducer,
  profile: profileReducer,
};

export const StoreDecorator = ({
  state,
  asyncReducers,
}: {
  state: DeepPartial<IStateSchema>;
  asyncReducers?: IReducersList;
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
