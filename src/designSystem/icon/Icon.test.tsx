import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("icon", () => {
  test("should render a menu icon", () => {
    render(<Icon name={"menu"} />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toBe("http://localhost/list.svg");
    expect(iconElement.alt).toBe("menu icon");
  });
});
