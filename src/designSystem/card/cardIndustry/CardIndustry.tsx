import { FC } from "react";
import styles from "./CardIndustry.module.scss";
import Heading from "../../heading/Heading";

interface ICardIndustry extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    industries_name: string;
    industries_image: string;
    industries_alt: string;
  };
}

const CardIndustry: FC<ICardIndustry> = (props) => {
  return (
    <div className={styles.common}>
      <div className={styles.image}>
        <img
          src={props.data.industries_image}
          alt={props.data.industries_alt}
        />
      </div>
      <div className={styles.title}>
        <Heading type={"h3"} colour={"base__light"}>
          {props.data.industries_name}
        </Heading>
      </div>
    </div>
  );
};

export default CardIndustry;
