import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("renders the navigation component", () => {
    render(<App />);
    const navigationElement = screen.getByRole("menu");
    expect(navigationElement).toBeInTheDocument();
  });
  test("renders the header component", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the purpose component", () => {
    render(<App />);
    const purposeElement = screen.getByLabelText("purpose-section");
    expect(purposeElement).toBeInTheDocument();
  });
  test("renders the services component", () => {
    render(<App />);
    const servicesElement = screen.getByLabelText("services-section");
    expect(servicesElement).toBeInTheDocument();
  });
  test("renders the industries component", () => {
    render(<App />);
    const industriesElement = screen.getByLabelText("industries-section");
    expect(industriesElement).toBeInTheDocument();
  });
  test("renders the about component", () => {
    render(<App />);
    const aboutElement = screen.getByLabelText("about-section");
    expect(aboutElement).toBeInTheDocument();
  });
  test("renders the footer component", () => {
    render(<App />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
