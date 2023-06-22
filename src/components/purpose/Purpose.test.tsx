import { render, screen } from "@testing-library/react";
import Purpose from "./Purpose";

describe("purpose", () => {
  test("should render the purpose section", () => {
    render(<Purpose />);
    const purposeElement = screen.getByLabelText("purpose-section");
    expect(purposeElement.tagName).toBe("SECTION");
    expect(purposeElement).toHaveClass("container", { exact: true });
  });
  test("should render the purpose's title", () => {
    render(<Purpose />);
    const purposeElement = screen.getByRole("heading", { level: 2 });
    expect(purposeElement.tagName).toBe("H2");
    expect(purposeElement.textContent).toBe("PURPOSE");
  });
  test("should render the purpose's content", () => {
    render(<Purpose />);
    const purposeElement = screen.getByText(
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs."
    );
    expect(purposeElement.tagName).toBe("P");
    expect(purposeElement.textContent).toBe(
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs."
    );
  });
});
