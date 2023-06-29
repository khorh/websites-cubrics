import { IAbout } from "../../../components/about/About.type";

export interface ICardAbout extends React.HTMLAttributes<HTMLDivElement> {
  data: IAbout;
}
