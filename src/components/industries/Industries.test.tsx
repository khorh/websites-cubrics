import { render, screen } from "@testing-library/react";
import Industries from "./Industries";

describe("industries", () => {
  test("should render industries", () => {
    render(<Industries />);
    const industriesElement = screen.getByLabelText("industries");
    expect(industriesElement).toHaveClass("common", { exact: true });
    const titleElement = screen.getByLabelText("title");
    expect(titleElement).toHaveClass("title", { exact: true });
    expect(industriesElement.textContent).toBe(
      "INDUSTRIESConsumerEnergyHealthcareTelecoms"
    );
  });
});
