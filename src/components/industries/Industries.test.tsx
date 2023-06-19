import { render, screen } from "@testing-library/react";
import Industries from "./Industries";

describe("industries", () => {
  test("should render the industries section", () => {
    render(<Industries />);
    const industriesElement = screen.getByLabelText("industries-section");
    expect(industriesElement.tagName).toBe("SECTION");
    expect(industriesElement.id).toBe("industries");
    expect(industriesElement).toHaveClass("container", { exact: true });
  });
  test("should render the industries' title", () => {
    render(<Industries />);
    const industriesTitleElement = screen.getByLabelText("industries-title");
    expect(industriesTitleElement.tagName).toBe("ARTICLE");
    expect(industriesTitleElement).toHaveClass("title");
    const industriesTitleHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(industriesTitleHeadingElement.tagName).toBe("H2");
    expect(industriesTitleHeadingElement.textContent).toBe("INDUSTRIES");
  });
  test("should render the industries' content", () => {
    render(<Industries />);
    const industriesContentElement =
      screen.getByLabelText("industries-content");
    expect(industriesContentElement.textContent).toBe(
      "ConsumerEnergyHealthcareTelecoms"
    );
  });
});
