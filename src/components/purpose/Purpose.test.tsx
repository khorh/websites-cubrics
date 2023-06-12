import { render, screen } from "@testing-library/react";
import Purpose from "./Purpose";

describe("purpose", () => {
  test("should render the purpose component", () => {
    render(<Purpose />);
    const purposeComponent = screen.getByLabelText("purpose");
    expect(purposeComponent.tagName).toBe("SECTION");
    expect(purposeComponent).toHaveClass("common", { exact: true });
    expect(purposeComponent.textContent).toBe(
      "PURPOSEOur purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs."
    );
  });
});
