import { render, screen } from "@testing-library/react";
import CardService from "./CardService";

const projectManagementData = {
  id: 1,
  title: "Project Management",
  introduction:
    "Companies are continuously transforming their organization to stay competitive.",
  description:
    "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.",
  order: 1,
};

describe("card service", () => {
  test("should render the card service", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceElement = screen.getByLabelText(
      "services-content-individual"
    );
    expect(cardServiceElement).toHaveClass("container", { exact: true });
  });
});

describe("card service's first container", () => {
  test("should render the card service's first container", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByLabelText(
      "services-content-firstContainer"
    );
    expect(cardServiceFirstContainerElement).toHaveClass("firstContainer", {
      exact: true,
    });
  });
  test("should render the card service's first container's title", () => {
    render(<CardService data={projectManagementData} />);
  });
  test("should render the card service's first container's title", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByLabelText(
      "services-content-firstContainer-title"
    );
    expect(cardServiceFirstContainerElement).toHaveClass(
      "firstContainer__title",
      {
        exact: true,
      }
    );
    const cardServiceFirstContainerTitleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(cardServiceFirstContainerTitleElement.tagName).toBe("H3");
    expect(cardServiceFirstContainerTitleElement.textContent).toBe(
      "Project Management"
    );
  });
  test("should render the card service's first container's intro", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByText(
      "Companies are continuously transforming their organization to stay competitive."
    );
    expect(cardServiceFirstContainerElement.tagName).toBe("P");
    expect(cardServiceFirstContainerElement.textContent).toBe(
      "Companies are continuously transforming their organization to stay competitive."
    );
  });
});

describe("card service's second container", () => {
  test("should render the card service's second container", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceSecondContainerElement = screen.getByLabelText(
      "services-content-secondContainer"
    );
    expect(cardServiceSecondContainerElement).toHaveClass("secondContainer", {
      exact: true,
    });
    const cardServiceSecondContainerParagraphElement = screen.getByText(
      "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands."
    );
    expect(cardServiceSecondContainerParagraphElement.tagName).toBe("P");
    expect(cardServiceSecondContainerParagraphElement.textContent).toBeInTheDocument;
  });
});
