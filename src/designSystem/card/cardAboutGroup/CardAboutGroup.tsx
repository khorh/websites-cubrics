import { FC } from "react";
import styles from "./CardAboutGroup.module.scss";
import CardAbout from "../cardAbout/CardAbout";

interface ICardAboutGroup extends React.HTMLAttributes<HTMLTextAreaElement> {
  data: {
    title: string;
    description: string;
    order: number;
  }[];
}

const CardAboutGroup: FC<ICardAboutGroup> = (props) => {
  const sortAboutData = props.data.sort((a, b) => a.order - b.order);

  const displayAboutData = sortAboutData.map((item) => {
    return <CardAbout data={item} key={item.title} />;
  });
  return (
    <article className={styles.container} aria-label={"about-content"}>
      {displayAboutData}
    </article>
  );
};

export default CardAboutGroup;
