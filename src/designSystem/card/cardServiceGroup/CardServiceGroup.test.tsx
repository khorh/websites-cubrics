import { render, screen } from "@testing-library/react";
import CardServiceGroup from "./CardServiceGroup";
import { serviceMockedData } from "../../../components/services/Services.mocked";

describe("card service group", () => {
  test("should render a card service group", () => {
    render(<CardServiceGroup data={serviceMockedData} />);
    const cardServiceGroupElement = screen.getByLabelText("group");
    expect(cardServiceGroupElement).toHaveClass("common");
    expect(cardServiceGroupElement.textContent).toBe(
      "Project ManagementCompanies are continuously transforming their organization to stay competitive.At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.Transformational ChangeTechnology alone is not sufficient to drive change.  Change needs to be embedded in the company's culture.At Cubrics, we drive these changes throughout the value chain by addressing the capability gap in employees and utilizing our modern communication techniques to embed changes for your suppliers and customers.Effective WorkshopsWorkshops address some of the top key issues faced when companies embark on project work.At Cubrics, we explore the requirements for a successful delivery which is tailored to your company's needs and engaging with the relevant stakeholders."
    );
  });
});
