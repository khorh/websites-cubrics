import { IServices } from "../../../components/services/Services.type";

export interface ICardService extends React.HTMLAttributes<HTMLDivElement> {
  data: IServices;
}
