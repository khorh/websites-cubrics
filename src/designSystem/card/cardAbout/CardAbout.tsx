import React, { FC } from "react";
import styles from "./CardAbout.module.scss";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

interface ICardAbout extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    about_name: string;
    about_description: string;
  };
}

const CardAbout: FC<ICardAbout> = (props) => {
  return (
    <div className={styles.common}>
      <Heading type={"h2"}>{props.data.about_name}</Heading>
      <Text type={"p2"}>{props.data.about_description}</Text>
    </div>
  );
};

export default CardAbout;
