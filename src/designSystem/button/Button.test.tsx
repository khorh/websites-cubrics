import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  test("should render a button", () => {
    render(<Button>Button</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.tagName).toBe("BUTTON");
    expect(buttonElement).toHaveClass("common", { exact: true });
    expect(buttonElement.textContent).toBe("Button");
  });
});
