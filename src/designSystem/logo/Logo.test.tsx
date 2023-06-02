import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("logo", () => {
  test("should display the cubrics logo", () => {
    render(<Logo />);
    const logoElement = screen.getByRole("img") as HTMLImageElement;
    expect(logoElement.src).toContain("logo-cubrics.svg");
  });
  test("should display the alt text", () => {
    render(<Logo />);
    const logoElement = screen.getByRole("img") as HTMLImageElement;
    expect(logoElement.alt).toBe("cubrics logo");
  });
});
