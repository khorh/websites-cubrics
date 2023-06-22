import { FC } from "react";
import styles from "./CardIndustryGroup.module.scss";
import CardIndustry from "../cardIndustry/CardIndustry";

interface ICardIndustryGroup extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    industries_id: string;
    industries_title: string;
    industries_image: string;
    industries_alt: string;
  }[];
}

const CardIndustryGroup: FC<ICardIndustryGroup> = (props) => {
  const displayIndustriesData = props.data.map((industry) => {
    return <CardIndustry data={industry} key={industry.industries_id} />;
  });

  return (
    <article className={styles.container} aria-label={"industries-content"}>
      {displayIndustriesData}
    </article>
  );
};

export default CardIndustryGroup;
