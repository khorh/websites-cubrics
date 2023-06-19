import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("should render the header", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement.tagName).toBe("HEADER");
    expect(headerElement).toHaveClass("background");
  });
  test("should render the header's content", () => {
    render(<Header />);
    const headerContentElement = screen.getByLabelText("header-content");
    expect(headerContentElement.tagName).toBe("DIV");
    expect(headerContentElement).toHaveClass("content");
  });
  test("should render the header's titles", () => {
    render(<Header />);
    const headerTitlesElement = screen.getByLabelText("header-titles");
    expect(headerTitlesElement.tagName).toBe("DIV");
    expect(headerTitlesElement).toHaveClass("titles");
    const headerTitleHeadingElement = screen.getByRole("heading", { level: 1 });
    expect(headerTitleHeadingElement.tagName).toBe("H1");
    expect(headerTitleHeadingElement.textContent).toBe(
      "Accelerating digital transformation"
    );
    const headerTitleParagraphElement = screen.getByText(
      "Driving success for global brand leaders"
    );
    expect(headerTitleParagraphElement.tagName).toBe("P");
    expect(headerTitleParagraphElement.textContent).toBe(
      "Driving success for global brand leaders"
    );
  });
  test("should render the header's contact button", () => {
    render(<Header />);
    const headerComponent = screen.getByRole("button");
    expect(headerComponent.textContent).toBe("Contact");
  });
});
