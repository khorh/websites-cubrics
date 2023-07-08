import { act, render, screen, waitFor } from "@testing-library/react";
import About from "./About";
import { client } from "../../useContentful";
import { IAbout } from "./About.type";
import getAbout from "./About.api";

const aboutMockedData: IAbout[] = [
  {
    id: 1,
    title: "Purpose",
    description:
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
    order: 1,
  },
];


jest.mock("./About.api", () => ({
  getAbout: jest.fn(() => Promise.resolve(aboutMockedData)),
}));

describe("about", () => {
  test("should render the about section", () => {
    render(<About />);
    const aboutElement = screen.getByLabelText("about-section");
    expect(aboutElement.tagName).toBe("SECTION");
    expect(aboutElement.id).toBe("about");
    expect(aboutElement).toHaveClass("container", { exact: true });
  });
  test("should render the about's title", () => {
    render(<About />);
    const aboutTitleElement = screen.getByLabelText("about-title");
    expect(aboutTitleElement.tagName).toBe("ARTICLE");
    expect(aboutTitleElement).toHaveClass("title", { exact: true });
    const aboutTitleHeadingElement = screen.getByRole("heading", { level: 2 });
    expect(aboutTitleHeadingElement.tagName).toBe("H2");
    expect(aboutTitleHeadingElement.textContent).toBe("ABOUT");
  });
  // test("should render the about's content", async () => {
  //   render(<About />);
  //   await waitFor(() => {
  //     const aboutContentElement = screen.getByLabelText("about-content");
  //     expect(aboutContentElement.textContent).toBe(
  //       "PurposeOur purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.TransparencyWe are passionate and transparent in our aim to address the biggest taboo in IT projects; a fact that 70% of business transformation failed to deliver better performance. With such staggering statistic, we pride ourselves to partner and solve your business problems under the most challenging environments.PeopleThe success of your transformation is predominantly driven by the engagement from your employees. Our talent can work with you to address the design, delivery & adoption rate of digital transformations. Our methodologies have been tried & tested across nearly 50 countries in 5 continents. Explore the possibilities to accelerate with us."
  //     );
  //   });
  // });
  test("test", async () => {
    await act(() => {
      render(<About />);
      waitFor(() => {
        const purposeElement = screen.getByText("Purpose");
        expect(purposeElement).toBeInTheDocument();
      });
    });
  });
});
