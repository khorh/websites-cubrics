import { FC } from "react";
import styles from "./CardAbout.module.scss";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

interface ICardAbout extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    about_id: string;
    about_title: string;
    about_description: string;
  };
}

const CardAbout: FC<ICardAbout> = (props) => {
  return (
    <div className={styles.container} aria-label={"about-content-individual"}>
      <Heading type={"h3"}>{props.data.about_title}</Heading>
      <Text type={"p2"}>{props.data.about_description}</Text>
    </div>
  );
};

export default CardAbout;
