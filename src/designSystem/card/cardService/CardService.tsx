import { FC } from "react";
import styles from "./CardService.module.scss";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

interface ICardService {
  data: {
    service_icon: string;
    service_name: string;
    service_intro: string;
    service_description: string;
  };
}

const CardService: FC<ICardService> = (props) => {
  return (
    <article className={styles.common}>
      <div className={styles.firstContainer}>
        <div className={styles.firstContainer__iconTitle}>
          <Heading type={"h2"} colour={"base__light"}>
            {props.data.service_name}
          </Heading>
        </div>
        <Text type={"p2"} colour={"base__light"}>
          {props.data.service_intro}
        </Text>
      </div>
      <div className={styles.secondContainer}>
        <Text type={"p2"}>{props.data.service_description}</Text>
      </div>
    </article>
  );
};

export default CardService;
