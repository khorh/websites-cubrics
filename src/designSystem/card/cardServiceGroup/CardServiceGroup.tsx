import { FC } from "react";
import styles from "./CardServiceGroup.module.scss";
import CardService from "../cardService/CardService";
import { IServices } from "../../../components/services/Services.type";

interface ICardServiceGroup extends React.HTMLAttributes<HTMLDivElement> {
  data: IServices[];
}

const CardServiceGroup: FC<ICardServiceGroup> = (props) => {
  const sortServicesData = props.data.sort((a, b) => a.order - b.order);

  const displayServicesData = sortServicesData.map((service) => {
    return <CardService data={service} key={service.id} />;
  });

  return (
    <article className={styles.container} aria-label={"services-content"}>
      {displayServicesData}
    </article>
  );
};

export default CardServiceGroup;
