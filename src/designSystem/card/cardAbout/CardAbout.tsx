import { FC } from "react";
import styles from "./CardAbout.module.scss";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

interface ICardAbout extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    id: number;
    title: string;
    description: string;
    order: number;
  };
}

const CardAbout: FC<ICardAbout> = (props) => {
  return (
    <div className={styles.container} aria-label={"about-content-individual"}>
      <Heading type={"h3"}>{props.data.title}</Heading>
      <Text type={"p2"}>{props.data.description}</Text>
    </div>
  );
};

export default CardAbout;
