import { render, screen } from "@testing-library/react";
import CardAbout from "./CardAbout";
import { aboutMockedData } from "../../../components/about/About.mocked";

describe("card about", () => {
  const aboutMockedDataTests = aboutMockedData.map((item) => {
    test("should render the card about", () => {
      render(<CardAbout data={item} />);
      const cardAboutElement = screen.getByLabelText(
        "about-content-individual"
      );
      expect(cardAboutElement.tagName).toBe("DIV");
      expect(cardAboutElement).toHaveClass("container", { exact: true });
    });
    test("should render the card about's title", () => {
      render(<CardAbout data={item} />);
      const cardAboutTitleElement = screen.getByRole("heading", { level: 3 });
      expect(cardAboutTitleElement.tagName).toBe("H3");
      expect(cardAboutTitleElement.textContent).toBe(`${item.title}`);
    });
    test("should render the card about's description", () => {
      render(<CardAbout data={item} />);
      const cardAboutDescriptionElement = screen.getByText(
        `${item.description}`
      );
      expect(cardAboutDescriptionElement.tagName).toBe("P");
      expect(cardAboutDescriptionElement.textContent).toBeInTheDocument;
    });
  });
  {
    aboutMockedDataTests;
  }
});
