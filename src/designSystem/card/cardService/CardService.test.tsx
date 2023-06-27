import { render, screen } from "@testing-library/react";
import CardService from "./CardService";
import FilePost from "../../../components/services/serviceImages/file-post.svg";

const projectManagementData = {
  id: 1,
  iconUrl: {
    fields: {
      file: {
        url: FilePost,
      },
    },
  },
  iconAlt: "file post icon",
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
  test("should render the card service's first container's icon and title", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByLabelText(
      "services-content-firstContainer-iconTitle"
    );
    expect(cardServiceFirstContainerElement).toHaveClass(
      "firstContainer__iconTitle",
      {
        exact: true,
      }
    );
  });
  test("should render the card service's first container's icon", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByRole(
      "img"
    ) as HTMLImageElement;
    expect(cardServiceFirstContainerElement.tagName).toBe("IMG");
    expect(cardServiceFirstContainerElement.src).toBe(
      "http://localhost/file-post.svg"
    );
    expect(cardServiceFirstContainerElement.alt).toBe("file post icon");
  });
  test("should render the card service's first container's title", () => {
    render(<CardService data={projectManagementData} />);
    const cardServiceFirstContainerElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(cardServiceFirstContainerElement.tagName).toBe("H3");
    expect(cardServiceFirstContainerElement.textContent).toBe(
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
    expect(cardServiceSecondContainerParagraphElement.textContent).toBe(
      "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands."
    );
  });
});
