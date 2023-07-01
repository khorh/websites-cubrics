import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from "./Navigation";

describe("navigation bar", () => {
  test("should render the navigation bar", () => {
    render(<NavigationBar />);
    const navigationBarElement = screen.getByRole("menu");
    expect(navigationBarElement.tagName).toBe("NAV");
    expect(navigationBarElement).toHaveClass("container", { exact: true });
  });
  test("should render the navigation bar's logo", () => {
    render(<NavigationBar />);
    const logoElement = screen.getByAltText("cubrics logo");
    expect(logoElement).toBeInTheDocument;
  });
});

describe("navigation bar with the menu icon", () => {
  test("should render the navigation bar with a menu icon container", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByLabelText(
      "vertical links container"
    );
    expect(verticalLinksElement).toHaveClass("links__vertical__container", {
      exact: true,
    });
  });
  test("should render the navigation bar with a menu icon", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByAltText("menu icon");
    expect(verticalLinksElement).toBeInTheDocument;
  });
  test("should render the navigation bar with navigation links when menu icon is clicked", () => {
    render(<NavigationBar />);
    const verticalLinksElement = screen.getByLabelText(
      "vertical links container"
    );
    fireEvent.click(verticalLinksElement);
    const verticalLinksElement2 = screen.getByLabelText("vertical links");
    expect(verticalLinksElement2).toHaveClass("links__vertical", {
      exact: true,
    });
    expect(verticalLinksElement2.textContent).toBe("ServicesIndustriesAbout");
    fireEvent.click(verticalLinksElement);
    expect(verticalLinksElement.textContent).toBe("");
  });
});

describe("navigation bar with the links", () => {
  test("should render the navigation bar with navigation links", () => {
    render(<NavigationBar />);
    const navigationLinksElement = screen.getByLabelText("horizontal links container");
    expect(navigationLinksElement).toHaveClass("links__horizontal__container", {
      exact: true,
    });
    expect(navigationLinksElement.textContent).toBe("ServicesIndustriesAbout");
  });
});
