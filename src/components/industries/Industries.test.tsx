import { render, screen } from "@testing-library/react";
import Industries from "./Industries";

describe("industries", () => {
  test("should render an industries component", () => {
    render(<Industries />);
    const industriesElement = screen.getByLabelText("industries-section");
    expect(industriesElement).toHaveClass("container", { exact: true });
    const titleElement = screen.getByLabelText("industries-title");
    expect(titleElement).toHaveClass("title", { exact: true });
    expect(industriesElement.textContent).toBe(
      "INDUSTRIESConsumerEnergyHealthcareTelecoms"
    );
  });
  test("should render an industries title", () => {
    render(<Industries />);
    const titleElement = screen.getByLabelText("industries-title");
    expect(titleElement).toHaveClass("title", { exact: true });
    const industriesTitleHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(industriesTitleHeadingElement.tagName).toBe("H2");
    expect(industriesTitleHeadingElement.textContent).toBe("INDUSTRIES");
  });
  test("should render an industries content", () => {
    render(<Industries />);
    const industriesContentElement = screen.getByRole("article", {
      name: /industries-content/i,
    });
    expect(industriesContentElement.textContent).toBe(
      "ConsumerEnergyHealthcareTelecoms"
    );
  });
});
