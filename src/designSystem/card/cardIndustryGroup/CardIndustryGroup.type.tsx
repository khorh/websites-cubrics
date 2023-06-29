import { IIndustry } from "../../../components/industries/Industries.type";

export interface ICardIndustryGroup
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  data: IIndustry[];
}
