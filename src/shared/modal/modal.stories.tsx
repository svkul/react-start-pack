import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./index";

export default {
  title: "Shared/Modal",
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  title: "Title",
  children: <div style={{ padding: "0 16px 16px" }}>Test text</div>,
  withPortal: false,
};
