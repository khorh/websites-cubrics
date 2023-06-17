import { FC } from "react";
import styles from "./CardIndustry.module.scss";
import Heading from "../../heading/Heading";
import Consumer from "../../../components/industries/industriesImages/consumer.jpg";

const CardIndustry: FC = () => {
  return (
    <div>
      <div className={styles.image}>
        <img src={Consumer} alt="consumer" />
      </div>
      <div className={styles.title}>
        <Heading type={"h2"} colour={"base__light"}>
          Consumer
        </Heading>
      </div>
    </div>
  );
};

export default CardIndustry;
