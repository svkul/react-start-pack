import { Story } from "@storybook/react";

import { Icons } from "@shared";

import "../../styles/index.css";

export function bodyDecorator(StoryComponent: Story) {
  return (
    <div>
      <Icons />

      <StoryComponent />
    </div>
  );
}
