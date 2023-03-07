import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./index";
import { icons } from "../icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shared/Icons",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = () => (
  <section
    style={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
    {Object.entries(icons).map(([_, iconData]) => {
      return (
        <section
          key={iconData.name}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            name={iconData.name}
            width={iconData.width}
            height={iconData.height}
          />

          <p
            style={{
              margin: "0 0 0 5px",
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            - {iconData.name}
          </p>
        </section>
      );
    })}
  </section>
);

export const All = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
All.args = {};
