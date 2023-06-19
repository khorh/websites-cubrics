import { render, screen } from "@testing-library/react";
import CardIndustry from "./CardIndustry";
import Consumer from "../../../components/industries/industriesImages/consumer.jpg";

const consumerData = {
  industries_id: "consumer",
  industries_title: "Consumer",
  industries_image: Consumer,
  industries_alt: "person walking with bag",
};

describe("card industry", () => {
  test("should render a card industry", () => {
    render(<CardIndustry data={consumerData} />);
    const cardIndustryElement = screen.getByRole("img") as HTMLImageElement;
    expect(cardIndustryElement.src).toBe("http://localhost/consumer.jpg");
    expect(cardIndustryElement.alt).toBe("person walking with bag");
  });
});
