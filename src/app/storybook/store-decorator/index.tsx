import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";

import { IStateScheme, StoreProvider } from "@app/providers";

export const StoreDecorator =
  (state: DeepPartial<IStateScheme>) => (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
