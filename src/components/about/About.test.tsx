import { render, screen } from "@testing-library/react";
import About from "./About";

describe("about", () => {
  test("should render an about component", () => {
    render(<About />);
    const aboutElement = screen.getByRole("region");
    expect(aboutElement.tagName).toBe("SECTION");
    expect(aboutElement.id).toBe("about");
    expect(aboutElement).toHaveClass("container");
  });
  test("should render an about title", () => {
    render(<About />);
    const aboutTitleElement = screen.getByRole("article", {
      name: /about-title/i,
    });
    expect(aboutTitleElement.tagName).toBe("ARTICLE");
    expect(aboutTitleElement).toHaveClass("title");
    const aboutTitleHeadingElement = screen.getByRole("heading", { level: 2 });
    expect(aboutTitleHeadingElement.tagName).toBe("H2");
    expect(aboutTitleHeadingElement.textContent).toBe("ABOUT");
  });
  test("should render an about content", () => {
    render(<About />);
    const aboutContentElement = screen.getByRole("article", {
      name: /about-content/i,
    });
    expect(aboutContentElement.textContent).toBe(
      "PurposeOur purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.PeopleThe success of your transformation is predominantly driven by the engagement from your employees. Our talent can work with you to address the design, delivery & adoption rate of digital transformations. Our methodologies have been tried & tested across nearly 50 countries in 5 continents. Explore the possibilities to accelerate with us.TransparencyWe are passionate and transparent in our aim to address the biggest taboo in IT projects; a fact that 70% of business transformation failed to deliver better performance. With such staggering statistic, we pride ourselves to partner and solve your business problems under the most challenging environments."
    );
  });
});
