import { FC } from "react";
import styles from "./CardAboutGroup.module.scss";
import CardAbout from "../cardAbout/CardAbout";

interface ICardAboutGroup {
  data: {
    about_name: string;
    about_description: string;
  }[];
}

const CardAboutGroup: FC<ICardAboutGroup> = (props) => {
  const displayAboutData = props.data.map((about) => {
    return <CardAbout data={about} key={about.about_name} />;
  });
  return <article className={styles.common}>{displayAboutData}</article>;
};

export default CardAboutGroup;
