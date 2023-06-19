import { render, screen } from "@testing-library/react";
import CardAbout from "./CardAbout";

describe("card about", () => {
  test("should render a card about", () => {
    const purposeData = {
      about_id: "purpose",
      about_title: "Purpose",
      about_description:
        "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
    };
    render(<CardAbout data={purposeData} />);
    const cardAboutElement = screen.getByRole("generic", {
      name: /about-content-individual/i,
    });
    expect(cardAboutElement.tagName).toBe("DIV");
    expect(cardAboutElement).toHaveClass("container");
  });
  test("should render a card about title", () => {
    const purposeData = {
      about_id: "purpose",
      about_title: "Purpose",
      about_description:
        "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
    };
    render(<CardAbout data={purposeData} />);
    const cardAboutTitleElement = screen.getByRole("heading", { level: 3 });
    expect(cardAboutTitleElement.tagName).toBe("H3");
    expect(cardAboutTitleElement.textContent).toBe("Purpose");
  });
  test("should render a card about description", () => {
    const purposeData = {
      about_id: "purpose",
      about_title: "Purpose",
      about_description:
        "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
    };
    render(<CardAbout data={purposeData} />);
    const cardAboutDescriptionElement = screen.getByText(
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs."
    );
    expect(cardAboutDescriptionElement.tagName).toBe("P");
    expect(cardAboutDescriptionElement.textContent).toBe(
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs."
    );
  });
});
