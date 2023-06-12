import { render, screen } from "@testing-library/react";
import NavigationLink from "./NavigationLink";

describe("navigation link", () => {
  test("should render a navigation link", () => {
    render(<NavigationLink name={"Link"} destination={"#link"} />);
    const navigationLinkElement = screen.getByRole("link");
    expect(navigationLinkElement.tagName).toBe("A");
    expect(navigationLinkElement).toHaveClass("common", { exact: true });
    expect(navigationLinkElement.textContent).toBe("Link");
    expect(navigationLinkElement).toHaveAttribute("href", "#link");
  });
});
