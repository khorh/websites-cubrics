import { render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("should render the header", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement.tagName).toBe("HEADER");
    expect(headerElement).toHaveClass("background", { exact: true });
  });
  test("should render the header's content", async () => {
    render(<Header />);
    await waitFor(() => {
      const headerContentElement = screen.getByLabelText("header-content");
      expect(headerContentElement).toBeInTheDocument;
      expect(headerContentElement.tagName).toBe("DIV");
      expect(headerContentElement).toHaveClass("content", { exact: true });
    });
  });
  test("should render the header's titles", async () => {
    render(<Header />);
    await waitFor(() => {
      const headerTitlesElement = screen.getByLabelText("header-titles");
      expect(headerTitlesElement.tagName).toBe("DIV");
      expect(headerTitlesElement).toHaveClass("titles", { exact: true });

      const headerTitleHeadingElement = screen.getByRole("heading", {
        level: 1,
      });
      expect(headerTitleHeadingElement.tagName).toBe("H1");
      expect(headerTitleHeadingElement.textContent).toBe(
        "Accelerating digital transformation"
      );

      const headerTitleParagraphElement = screen.getByText(
        "Driving success for global brand leaders"
      );
      expect(headerTitleParagraphElement.tagName).toBe("P");
      expect(headerTitleParagraphElement).toBeInTheDocument;
    });
  });
  test("should render the header's contact button", async () => {
    render(<Header />);
    await waitFor(() => {
      const headerButtonElement = screen.getByRole("button");
      expect(headerButtonElement.textContent).toBe("Contact");
    });
  });
});
