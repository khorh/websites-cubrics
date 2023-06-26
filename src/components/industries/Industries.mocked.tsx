import { IIndustry } from "./Industries.type";
import Consumer from "./industriesImages/consumer.jpg";
import Energy from "./industriesImages/energy.jpg";
import Healthcare from "./industriesImages/healthcare.jpg";
import Telecoms from "./industriesImages/telecoms.jpg";

export const industriesMockedData: IIndustry[] = [
  {
    id: 1,
    title: "Consumer",
    image: {
      fields: {
        file: {
          url: Consumer,
        },
      },
    },
    alt: "person walking with bag",
    order: 1,
  },
  {
    id: 2,
    title: "Energy",
    image: {
      fields: {
        file: {
          url: Energy,
        },
      },
    },
    alt: "yellow lightbulb",
    order: 2,
  },
  {
    id: 3,
    title: "Healthcare",
    image: {
      fields: {
        file: {
          url: Healthcare,
        },
      },
    },
    alt: "bottle with tablets pouring out",
    order: 3,
  },
  {
    id: 4,
    title: "Telecoms",
    image: {
      fields: {
        file: {
          url: Telecoms,
        },
      },
    },
    alt: "telecoms mast",
    order: 4,
  },
];
