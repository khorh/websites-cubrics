import { IServices } from "../../../components/services/Services.type";

export interface ICardServiceGroup
  extends React.HTMLAttributes<HTMLDivElement> {
  data: IServices[];
}
