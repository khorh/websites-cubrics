import { render, screen } from "@testing-library/react";
import CardAboutGroup from "./CardAboutGroup";
import { aboutMockedData } from "../../../components/about/About.mocked";

describe("card about group", () => {
  test("should render an about group", () => {
    render(<CardAboutGroup data={aboutMockedData} />);
    const cardAboutGroupElement = screen.getByRole("article", {
      name: /about-content/i,
    });
    expect(cardAboutGroupElement.tagName).toBe("ARTICLE");
    expect(cardAboutGroupElement).toHaveClass("container");
    expect(cardAboutGroupElement.textContent).toBe(
      "PurposeOur purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.PeopleThe success of your transformation is predominantly driven by the engagement from your employees. Our talent can work with you to address the design, delivery & adoption rate of digital transformations. Our methodologies have been tried & tested across nearly 50 countries in 5 continents. Explore the possibilities to accelerate with us.TransparencyWe are passionate and transparent in our aim to address the biggest taboo in IT projects; a fact that 70% of business transformation failed to deliver better performance. With such staggering statistic, we pride ourselves to partner and solve your business problems under the most challenging environments."
    );
  });
});
