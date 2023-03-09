import { StoreDecorator } from "@app/storybook/store-decorator";
import { authReducer } from "@features";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoginForm from "./index";

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
Primary.decorators = [
  StoreDecorator({
    state: {
      authForm: { username: "admin", password: "123", isLoading: false },
    },
    asyncReducers: { authForm: authReducer },
  }),
];
