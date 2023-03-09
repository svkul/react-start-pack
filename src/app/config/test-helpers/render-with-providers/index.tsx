import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";

import { IStateSchema, StoreProvider } from "@app/providers";

import i18nTest from "../../../i18n/i18n-test";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export function renderWithProviders(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = "/", initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
