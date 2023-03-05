import { render, screen } from "@testing-library/react";

import { Button, EButtonTheme } from "./index";

describe("Button", () => {
  test("Render button", () => {
    render(<Button>Render test</Button>);

    expect(screen.getByText("Render test")).toBeInTheDocument();
  });

  test("Render Primary type button", () => {
    render(<Button>Primary type</Button>);

    expect(screen.getByText("Primary type")).toHaveClass("primary");
  });

  test("Render Secondary type button", () => {
    render(<Button theme={EButtonTheme.SECONDARY}>Secondary type</Button>);

    expect(screen.getByText("Secondary type")).toHaveClass("secondary");
  });
});
