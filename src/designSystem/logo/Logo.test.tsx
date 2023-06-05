import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("logo", () => {
  test("should render the cubrics logo", () => {
    render(<Logo />);
    const logoElement = screen.getByRole("img") as HTMLImageElement;
    expect(logoElement.tagName).toBe("IMG");
    expect(logoElement.src).toContain("logo-cubrics.svg");
    expect(logoElement.alt).toBe("cubrics logo");
  });
});
