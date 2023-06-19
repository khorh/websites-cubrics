import { FC } from "react";
import styles from "./CardAboutGroup.module.scss";
import CardAbout from "../cardAbout/CardAbout";

interface ICardAboutGroup extends React.HTMLAttributes<HTMLTextAreaElement> {
  data: {
    about_id: string;
    about_title: string;
    about_description: string;
  }[];
}

const CardAboutGroup: FC<ICardAboutGroup> = (props) => {
  const displayAboutData = props.data.map((about) => {
    return <CardAbout data={about} key={about.about_id} />;
  });
  return (
    <article className={styles.container} aria-label={"about-content"}>
      {displayAboutData}
    </article>
  );
};

export default CardAboutGroup;
