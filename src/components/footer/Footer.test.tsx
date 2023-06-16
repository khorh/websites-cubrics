import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer", () => {
  test("should render a footer", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement.textContent).toBe("© Copyright Cubrics 2023");
  });
});
