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
  test("should render a menu icon container", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByLabelText(
      "vertical links container"
    );
    expect(verticalLinksElement).toHaveClass("links__vertical__container");
  });
  test("should render a menu icon in the navigation bar", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByAltText("menu icon");
    expect(verticalLinksElement).toBeInTheDocument;
  });
  test("should render navigation links when menu icon is clicked", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByLabelText(
      "vertical links container"
    );
    fireEvent.click(verticalLinksElement);
    const verticalLinksElement2 = screen.getByLabelText("vertical links");
    expect(verticalLinksElement2).toHaveClass("links__vertical");
    expect(verticalLinksElement2.textContent).toBe("ServicesIndustriesAbout");
    fireEvent.click(verticalLinksElement);
    expect(verticalLinksElement.textContent).toBe("");
  });
});

describe("navigation bar with the links", () => {
  test("should render navigation links", () => {
    render(<NavigationBar />);
    const navigationLinksElement = screen.getByLabelText("horizontal links");
    expect(navigationLinksElement).toHaveClass("links__horizontal__container");
    expect(navigationLinksElement.textContent).toBe("ServicesIndustriesAbout");
  });
});
