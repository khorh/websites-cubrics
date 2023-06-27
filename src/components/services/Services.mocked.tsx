import { IServices } from "./Services.type";
import FilePost from "./serviceImages/file-post.svg";
import Hurricane from "./serviceImages/hurricane.svg";
import People from "./serviceImages/people.svg";

export const serviceMockedData: IServices[] = [
  {
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
  },
  {
    id: 2,
    iconUrl: {
      fields: {
        file: {
          url: Hurricane,
        },
      },
    },
    iconAlt: "hurricane icon",
    title: "Transformational Change",
    introduction:
      "Technology alone is not sufficient to drive change.  Change needs to be embedded in the company's culture.",
    description:
      "At Cubrics, we drive these changes throughout the value chain by addressing the capability gap in employees and utilizing our modern communication techniques to embed changes for your suppliers and customers.",
    order: 2,
  },
  {
    id: 3,
    iconUrl: {
      fields: {
        file: {
          url: People,
        },
      },
    },
    iconAlt: "people icon",
    title: "Effective Workshops",
    introduction:
      "Workshops address some of the top key issues faced when companies embark on project work.",
    description:
      "At Cubrics, we explore the requirements for a successful delivery which is tailored to your company's needs and engaging with the relevant stakeholders.",
    order: 3,
  },
];
