interface IServiceMockedData {
  service_id: string;
  service_icon: string;
  service_title: string;
  service_intro: string;
  service_description: string;
}

export const serviceMockedData: IServiceMockedData[] = [
  {
    service_id: "project management",
    service_icon: "file post",
    service_title: "Project Management",
    service_intro:
      "Companies are continuously transforming their organization to stay competitive.",
    service_description:
      "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.",
  },
  {
    service_id: "transformational change",
    service_icon: "hurricane",
    service_title: "Transformational Change",
    service_intro:
      "Technology alone is not sufficient to drive change.  Change needs to be embedded in the company's culture.",
    service_description:
      "At Cubrics, we drive these changes throughout the value chain by addressing the capability gap in employees and utilizing our modern communication techniques to embed changes for your suppliers and customers.",
  },
  {
    service_id: "effective workshops",
    service_icon: "people",
    service_title: "Effective Workshops",
    service_intro:
      "Workshops address some of the top key issues faced when companies embark on project work.",
    service_description:
      "At Cubrics, we explore the requirements for a successful delivery which is tailored to your company's needs and engaging with the relevant stakeholders.",
  },
];
