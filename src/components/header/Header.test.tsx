import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("shoulder render the header", () => {
    render(<Header />);
    const headerComponent = screen.getByRole("banner");
    expect(headerComponent.tagName).toBe("HEADER");
    expect(headerComponent).toHaveClass("background");
  });
  test("shoulder render the header's content", () => {
    render(<Header />);
    const headerComponent = screen.getByLabelText("header content");
    expect(headerComponent.tagName).toBe("DIV");
    expect(headerComponent).toHaveClass("content");
  });
  test("shoulder render the header's titles", () => {
    render(<Header />);
    const headerComponent = screen.getByLabelText("header titles");
    expect(headerComponent.tagName).toBe("DIV");
    expect(headerComponent).toHaveClass("titles");
    expect(headerComponent.textContent).toBe(
      "Accelerating digital transformationDriving success for global brand leaders"
    );
  });
  test("should render a contact button", () => {
    render(<Header />);
    const headerComponent = screen.getByRole("button");
    expect(headerComponent.textContent).toBe("Contact");
  });
});
