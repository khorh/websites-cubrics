import { FC } from "react";
import styles from "./CardIndustryGroup.module.scss";
import CardIndustry from "../cardIndustry/CardIndustry";
import { ICardIndustryGroup } from "./CardIndustryGroup.type";

const CardIndustryGroup: FC<ICardIndustryGroup> = (props) => {
  const sortIndustriesData = props.data.sort((a, b) => a.order - b.order);

  const displayIndustriesData = sortIndustriesData.map((item) => {
    return <CardIndustry data={item} key={item.id} />;
  });

  return (
    <article className={styles.container} aria-label={"industries-content"}>
      {displayIndustriesData}
    </article>
  );
};

export default CardIndustryGroup;
