import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./index";
import image from "@assets/test/download.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shared/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = args => (
  <div
    style={{
      padding: "16px",
    }}
  >
    <Avatar {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: image,
  alt: "avatar",
  width: 150,
  height: 150,
};
