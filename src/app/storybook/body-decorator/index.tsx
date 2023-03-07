import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Story } from "@storybook/react";

import { Icons } from "@shared";

import i18n from "../../i18n/i18n-test";

import "../../styles/index.css";

export function bodyDecorator(StoryComponent: Story) {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <div data-theme="light">
          <Icons />

          <StoryComponent />
        </div>
      </I18nextProvider>
    </Suspense>
  );
}
