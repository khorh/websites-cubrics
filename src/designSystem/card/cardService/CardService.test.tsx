import { render, screen } from "@testing-library/react";
import CardService from "./CardService";

describe("card service", () => {
  test("should render a card service for project management", () => {
    const projectManagementData = {
      service_icon: "file post",
      service_name: "Project Management",
      service_intro:
        "Companies are continuously transforming their organization to stay competitive.",
      service_description:
        "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.",
    };
    render(<CardService data={projectManagementData} />);
    const cardServiceElement = screen.getByLabelText("card");
    expect(cardServiceElement).toHaveClass("common");
    expect(cardServiceElement.textContent).toBe(
      "Project ManagementCompanies are continuously transforming their organization to stay competitive.At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands."
    );
  });
});
