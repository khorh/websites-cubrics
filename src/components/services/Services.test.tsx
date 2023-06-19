import { render, screen } from "@testing-library/react";
import Services from "./Services";

describe("service", () => {
  test("should render the services section", () => {
    render(<Services />);
    const servicesElement = screen.getByLabelText("services-section");
    expect(servicesElement).toHaveClass("common", { exact: true });
    const titleElement = screen.getByLabelText("title");
    expect(titleElement).toHaveClass("title", { exact: true });
    expect(titleElement.textContent).toBe("SERVICES");
    const serviceGroupElement = screen.getByLabelText("serviceGroup");
    expect(serviceGroupElement).toHaveClass("serviceGroup", { exact: true });
    expect(serviceGroupElement.textContent).toBe(
      "Project ManagementCompanies are continuously transforming their organization to stay competitive.At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.Transformational ChangeTechnology alone is not sufficient to drive change.  Change needs to be embedded in the company's culture.At Cubrics, we drive these changes throughout the value chain by addressing the capability gap in employees and utilizing our modern communication techniques to embed changes for your suppliers and customers.Effective WorkshopsWorkshops address some of the top key issues faced when companies embark on project work.At Cubrics, we explore the requirements for a successful delivery which is tailored to your company's needs and engaging with the relevant stakeholders."
    );
  });
});
