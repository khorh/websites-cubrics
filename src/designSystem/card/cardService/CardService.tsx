import { FC } from "react";
import styles from "./CardService.module.scss";
import Heading from "../../heading/Heading";
import Icon from "../../icon/Icon";
import Text from "../../text/Text";

export interface ICardService extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    service_icon: string;
    service_name: string;
    service_intro: string;
    service_description: string;
  };
}

const CardService: FC<ICardService> = (props) => {
  return (
    <div className={styles.common} aria-label={"card"}>
      <div className={styles.firstContainer}>
        <div className={styles.firstContainer__iconTitle}>
          <Icon name={props.data.service_icon} />
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
    </div>
  );
};

export default CardService;
