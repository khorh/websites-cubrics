import Consumer from "./industriesImages/consumer.jpg";
import Energy from "./industriesImages/energy.jpg";
import Healthcare from "./industriesImages/healthcare.jpg";
import Telecoms from "./industriesImages/telecoms.jpg";

interface IIndustriesMockedData {
  industries_name: string;
  industries_image: string;
  industries_alt: string;
}

export const industriesMockedData: IIndustriesMockedData[] = [
  {
    industries_name: "consumer",
    industries_image: Consumer,
    industries_alt: "person walking with bag",
  },
  {
    industries_name: "energy",
    industries_image: Energy,
    industries_alt: "yellow lightbulb",
  },
  {
    industries_name: "healthcare",
    industries_image: Healthcare,
    industries_alt: "bottle with tablets pouring out",
  },
  {
    industries_name: "telecoms",
    industries_image: Telecoms,
    industries_alt: "telecoms mast",
  },
];
