import { FC } from "react";
import styles from "./CardServiceGroup.module.scss";
import CardService from "../cardService/CardService";

interface ICardServiceGroup extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    service_icon: string;
    service_name: string;
    service_intro: string;
    service_description: string;
  }[];
}

const CardServiceGroup: FC<ICardServiceGroup> = (props) => {
  const displayServicesData = props.data.map((service) => {
    return <CardService data={service} key={service.service_name} />;
  });
  return <div className={styles.common}>{displayServicesData}</div>;
};

export default CardServiceGroup;
