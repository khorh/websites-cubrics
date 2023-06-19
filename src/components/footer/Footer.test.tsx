import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer", () => {
  test("should render the footer", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement.tagName).toBe("FOOTER");
    expect(footerElement).toHaveClass("container", { exact: true });
  });
  test("should render the footer's content", () => {
    render(<Footer />);
    const footerElement = screen.getByText("© Copyright Cubrics 2023");
    expect(footerElement.tagName).toBe("P");
    expect(footerElement.textContent).toBe("© Copyright Cubrics 2023");
  });
});
