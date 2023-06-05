import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("navigation bar", () => {
  test("should render a navigation bar container", () => {
    render(<NavigationBar />);
    const navigationBarElement = screen.getByRole("navigation");
    expect(navigationBarElement.tagName).toBe("NAV");
    expect(navigationBarElement).toHaveClass("container");
  });
  test("should render a logo in the navigation bar", () => {
    render(<NavigationBar />);
    const logoElement = screen.getByAltText("cubrics logo");
    expect(logoElement).toBeInTheDocument;
  });
});

describe("navigation bar with the menu icon", () => {
  test("should render a menu icon in the navigation bar", () => {
    render(<NavigationBar />);
    const menuIconElement = screen.getByAltText("menu icon");
    expect(menuIconElement).toBeInTheDocument;
  });
  test("should render navigation links when menu icon is clicked", () => {
    render(<NavigationBar />);
    const menuIconElement = screen.getByRole("button");
    fireEvent.click(menuIconElement);
    expect(menuIconElement.textContent).toBe("ServicesIndustriesAbout");
    fireEvent.click(menuIconElement);
    expect(menuIconElement.textContent).toBe("");
  });
});

describe("navigation bar with the links", () => {
  test("should render navigation links", () => {
    render(<NavigationBar />);
    const navigationLinksElement = screen.getByRole("navigation");
    expect(navigationLinksElement.textContent).toBe("ServicesIndustriesAbout");
  });
});
