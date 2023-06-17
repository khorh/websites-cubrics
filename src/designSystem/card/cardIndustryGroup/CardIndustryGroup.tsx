import { FC } from "react";
import styles from "./CardIndustryGroup.module.scss";
import CardIndustry from "../cardIndustry/CardIndustry";

interface ICardIndustryGroup extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    industries_name: string;
    industries_image: string;
    industries_alt: string;
  }[];
}

const CardIndustryGroup: FC<ICardIndustryGroup> = (props) => {
  const displayIndustriesData = props.data.map((industry) => {
    return <CardIndustry data={industry} />;
  });

  return (
    <div className={styles.common} aria-label={"group"}>
      {displayIndustriesData}
    </div>
  );
};

export default CardIndustryGroup;
