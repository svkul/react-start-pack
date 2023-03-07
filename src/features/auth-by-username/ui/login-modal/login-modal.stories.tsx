import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginModal } from "./index";

export default {
  title: "Features/LoginModal",
  component: LoginModal,
  argTypes: {},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = args => (
  <div style={{ padding: "16px" }}>
    <LoginModal {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  withPortal: false,
  isOpened: true,
};
