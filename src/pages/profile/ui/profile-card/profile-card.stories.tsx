import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfileCard } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shared/ProfileCard",
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = args => (
  <div
    style={{
      padding: "16px",
    }}
  >
    <ProfileCard {...args} />
  </div>
);

export const ReadOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReadOnly.args = {
  username: "Serhii",
  country: "Ukraine",
};

export const Editable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Editable.args = {
  username: "Serhii",
  country: "Ukraine",
  readOnly: false,
};
