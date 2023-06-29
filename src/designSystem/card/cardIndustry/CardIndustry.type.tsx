import { IIndustry } from "../../../components/industries/Industries.type";

export interface ICardIndustry extends React.HTMLAttributes<HTMLDivElement> {
  data: IIndustry;
}
