import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("text", () => {
  test("should render a type of text called p1", () => {
    render(<Text type={"p1"}>P1</Text>);
    const textElement = screen.getByText("P1");
    expect(textElement.tagName).toBe("P");
    expect(textElement).toHaveClass("common p1 base__dark", { exact: true });
  });
  test("should render a type of text called p2", () => {
    render(<Text type={"p2"}>P2</Text>);
    const textElement = screen.getByText("P2");
    expect(textElement.tagName).toBe("P");
    expect(textElement).toHaveClass("common p2 base__dark", { exact: true });
  });
  test("should render a type of text called footer", () => {
    render(<Text type={"footer"}>Footer</Text>);
    const textElement = screen.getByText("Footer");
    expect(textElement.tagName).toBe("P");
    expect(textElement).toHaveClass("common footer base__dark", {
      exact: true,
    });
  });
});

describe("text with colour options", () => {
  test("should render p1 with colour base__light", () => {
    render(
      <Text type={"p1"} colour={"base__light"}>
        P1
      </Text>
    );
    const textElement = screen.getByText("P1");
    expect(textElement).toHaveClass("common p1 base__light", {
      exact: true,
    });
  });
});
