import { FC } from "react";
import styles from "./CardServiceGroup.module.scss";
import CardService from "../cardService/CardService";

interface ICardServiceGroup extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    service_id: string;
    service_icon: string;
    service_title: string;
    service_intro: string;
    service_description: string;
  }[];
}

const CardServiceGroup: FC<ICardServiceGroup> = (props) => {
  const displayServicesData = props.data.map((service) => {
    return <CardService data={service} key={service.service_id} />;
  });
  return (
    <article className={styles.container} aria-label={"services-content"}>
      {displayServicesData}
    </article>
  );
};

export default CardServiceGroup;
