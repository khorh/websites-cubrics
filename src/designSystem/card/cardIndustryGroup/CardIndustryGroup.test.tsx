import { render, screen } from "@testing-library/react";
import CardIndustryGroup from "./CardIndustryGroup";
import { industriesMockedData } from "../../../components/industries/Industries.mocked";

describe("card industry group", () => {
  test("should render the card industry group", () => {
    render(<CardIndustryGroup data={industriesMockedData} />);
    const cardIndustryGroupElement =
      screen.getByLabelText("industries-content");
    expect(cardIndustryGroupElement.tagName).toBe("ARTICLE");
    expect(cardIndustryGroupElement).toHaveClass("container", { exact: true });
    expect(cardIndustryGroupElement.textContent).toBe(
      "ConsumerEnergyHealthcareTelecoms"
    );
  });
});
