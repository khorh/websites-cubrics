import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("icon", () => {
  test("should render a menu icon", () => {
    render(<Icon />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toContain("list.svg");
  });
  test("should display the alt text for the icon", () => {
    render(<Icon />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.alt).toBe("menu icon");
  });
});
