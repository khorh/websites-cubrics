import Consumer from "./cardIndustryImages/consumer.jpg";
import Energy from "./cardIndustryImages/energy.jpg";
import Healthcare from "./cardIndustryImages/healthcare.jpg";
import Telecoms from "./cardIndustryImages/telecoms.jpg";

interface ICardIndustry {
  card_industry_name: string;
  card_industry_image: string;
  card_industry_alt: string;
}

export const cardIndustryMockedData: ICardIndustry[] = [
  {
    card_industry_name: "consumer",
    card_industry_image: Consumer,
    card_industry_alt: "person walking with bag",
  },
  {
    card_industry_name: "energy",
    card_industry_image: Energy,
    card_industry_alt: "yellow lightbulb",
  },
  {
    card_industry_name: "healthcare",
    card_industry_image: Healthcare,
    card_industry_alt: "bottle with tablets pouring out",
  },
  {
    card_industry_name: "telecoms",
    card_industry_image: Telecoms,
    card_industry_alt: "telecoms mast",
  },
];
