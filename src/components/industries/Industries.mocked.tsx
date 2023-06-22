import Consumer from "./industriesImages/consumer.jpg";
import Energy from "./industriesImages/energy.jpg";
import Healthcare from "./industriesImages/healthcare.jpg";
import Telecoms from "./industriesImages/telecoms.jpg";

interface IIndustriesMockedData {
  industries_id: string;
  industries_title: string;
  industries_image: string;
  industries_alt: string;
}

export const industriesMockedData: IIndustriesMockedData[] = [
  {
    industries_id: "consumer",
    industries_title: "Consumer",
    industries_image: Consumer,
    industries_alt: "person walking with bag",
  },
  {
    industries_id: "energy",
    industries_title: "Energy",
    industries_image: Energy,
    industries_alt: "yellow lightbulb",
  },
  {
    industries_id: "healthcare",
    industries_title: "Healthcare",
    industries_image: Healthcare,
    industries_alt: "bottle with tablets pouring out",
  },
  {
    industries_id: "telecoms",
    industries_title: "Telecoms",
    industries_image: Telecoms,
    industries_alt: "telecoms mast",
  },
];
