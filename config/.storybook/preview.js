import { addDecorator } from "@storybook/react";

import { bodyDecorator } from "../../src/app/storybook";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: ["theme-light"] },
      { name: "dark", class: ["theme-dark"] },
    ],
    target: document.body,
  },
};

addDecorator(bodyDecorator);
