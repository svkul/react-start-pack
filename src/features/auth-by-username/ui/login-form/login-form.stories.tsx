import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "./index";

export default {
  title: "Features/LoginForm",
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
  <div style={{ padding: "16px 0 0" }}>
    <LoginForm {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
