import { FC } from "react";
import styles from "./CardService.module.scss";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";
import { ICardService } from "./CardService.type";

const CardService: FC<ICardService> = (props) => {
  return (
    <div
      className={styles.container}
      aria-label={"services-content-individual"}
    >
      <div
        className={styles.firstContainer}
        aria-label="services-content-firstContainer"
      >
        <div
          className={styles.firstContainer__title}
          aria-label="services-content-firstContainer-title"
        >
          <Heading type={"h3"} colour={"base__light"}>
            {props.data.title}
          </Heading>
        </div>
        <Text type={"p2"} colour={"base__light"}>
          {props.data.introduction}
        </Text>
      </div>
      <div
        className={styles.secondContainer}
        aria-label="services-content-secondContainer"
      >
        <Text type={"p2"}>{props.data.description}</Text>
      </div>
    </div>
  );
};

export default CardService;
