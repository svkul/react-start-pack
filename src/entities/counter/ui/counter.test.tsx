import { screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

import { renderWithProviders } from "@app/config/test-helpers";

import { Counter } from "./index";

describe("Button", () => {
  test("Render counter", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    expect(screen.getByTestId("value-title")).toHaveTextContent("Value: 5");
  });

  test("Increment", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    userEvent.click(screen.getByTestId("increment-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("Value: 6");
  });

  test("Decrement", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    userEvent.click(screen.getByTestId("decrement-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("Value: 4");
  });
});
