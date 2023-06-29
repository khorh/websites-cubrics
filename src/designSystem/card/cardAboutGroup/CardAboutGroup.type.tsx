import { IAbout } from "../../../components/about/About.type";

export interface ICardAboutGroup
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  data: IAbout[];
}
