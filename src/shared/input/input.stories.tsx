import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shared/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = args => (
  <div style={{ padding: "16px" }}>
    <Input {...args} />
  </div>
);

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  value: "Test text",
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  value: "Test text",
  type: "password",
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  value: "Test text",
  type: "password",
  error: "Error message",
};
