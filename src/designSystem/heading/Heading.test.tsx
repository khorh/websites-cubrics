import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("heading", () => {
  test("should render a type of heading called h1", () => {
    render(<Heading type={"h1"}>H1</Heading>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H1");
    expect(headingElement).toHaveClass("common base__dark", { exact: true });
    expect(headingElement.textContent).toBe("H1");
  });
  test("should render a type of heading called h2", () => {
    render(<Heading type={"h2"}>H2</Heading>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H2");
    expect(headingElement).toHaveClass("common base__dark", { exact: true });
    expect(headingElement.textContent).toBe("H2");
  });
  test("should render a type of heading called h3", () => {
    render(<Heading type={"h3"}>H3</Heading>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H3");
    expect(headingElement).toHaveClass("common base__dark", { exact: true });
    expect(headingElement.textContent).toBe("H3");
  });
});

describe("heading with colour options", () => {
  test("should render h1 with colour primary__dark", () => {
    render(
      <Heading type={"h1"} colour={"primary__dark"}>
        H1
      </Heading>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveClass("common primary__dark");
  });
  test("should render h1 with colour base__light", () => {
    render(
      <Heading type={"h1"} colour={"base__light"}>
        H1
      </Heading>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveClass("common base__light");
  });
});
