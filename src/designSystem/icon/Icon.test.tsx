import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("icon", () => {
  test("should render a file post icon", () => {
    render(<Icon name={"file post"} />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toBe("http://localhost/file-post.svg");
    expect(iconElement.alt).toBe("file post icon");
  });
  test("should render a hurricane icon", () => {
    render(<Icon name={"hurricane"} />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toBe("http://localhost/hurricane.svg");
    expect(iconElement.alt).toBe("hurricane icon");
  });
  test("should render a menu icon", () => {
    render(<Icon name={"menu"} />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toBe("http://localhost/list.svg");
    expect(iconElement.alt).toBe("menu icon");
  });
  test("should render a people icon", () => {
    render(<Icon name={"people"} />);
    const iconElement = screen.getByRole("img") as HTMLImageElement;
    expect(iconElement.src).toBe("http://localhost/people.svg");
    expect(iconElement.alt).toBe("people icon");
  });
});
