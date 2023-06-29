import { FC } from "react";
import styles from "./CardIndustry.module.scss";
import Heading from "../../heading/Heading";
import { ICardIndustry } from "./CardIndustry.type";

const CardIndustry: FC<ICardIndustry> = (props) => {
  return (
    <div
      className={styles.container}
      aria-label={"industries-content-individual"}
    >
      <div className={styles.image} aria-label={"industries-content-image"}>
        <img src={props.data.image.fields.file.url} alt={props.data.alt} />
      </div>
      <div className={styles.title} aria-label={"industries-content-title"}>
        <Heading type={"h3"} colour={"base__light"}>
          {props.data.title}
        </Heading>
      </div>
    </div>
  );
};

export default CardIndustry;
