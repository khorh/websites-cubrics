import { render, screen } from "@testing-library/react";
import CardIndustry from "./CardIndustry";
import { industriesMockedData } from "../../../components/industries/Industries.mocked";

describe("card industry", () => {
  const industriesMockedDataTests = industriesMockedData.map((item) => {
    test("should render the card industry", () => {
      render(<CardIndustry data={item} />);
      const cardIndustryElement = screen.getByLabelText(
        "industries-content-individual"
      );
      expect(cardIndustryElement.tagName).toBe("DIV");
      expect(cardIndustryElement).toHaveClass("container", { exact: true });
    });
    test("should render the card industry's image", () => {
      render(<CardIndustry data={item} />);
      const cardIndustryImageContainerElement = screen.getByLabelText(
        "industries-content-image"
      );
      expect(cardIndustryImageContainerElement).toHaveClass("image", {
        exact: true,
      });
      const cardIndustryImageElement = screen.getByRole(
        "img"
      ) as HTMLImageElement;
      expect(cardIndustryImageElement.src).toBe(
        `http://localhost/${item.image.fields.file.url}`
      );
      expect(cardIndustryImageElement.alt).toBe(`${item.alt}`);
    });
    test("should render the card industry's title", () => {
      render(<CardIndustry data={item} />);
      const cardIndustryTitleContainerElement = screen.getByLabelText(
        "industries-content-title"
      );
      expect(cardIndustryTitleContainerElement).toHaveClass("title", {
        exact: true,
      });
      const cardIndustryTitleElement = screen.getByRole("heading", {
        level: 3,
      });
      expect(cardIndustryTitleElement.textContent).toBe(`${item.title}`);
    });
  });
  {
    industriesMockedDataTests;
  }
});
