import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("renders all components", () => {
    render(<App />);
    const appElement = screen.getByText(/services/i);
    expect(appElement).toBeInTheDocument();
  });
});
