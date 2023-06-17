import { FC } from "react";
import styles from "./Industries.module.scss";
import CardIndustryGroup from "../../designSystem/card/cardIndustryGroup/CardIndustryGroup";
import Heading from "../../designSystem/heading/Heading";
import { industriesMockedData } from "./Industries.mocked";

const Industries: FC = () => {
  return (
    <section className={styles.common} aria-label="industries">
      <div className={styles.title} aria-label="title">
        <Heading type={"h2"} colour={"primary__dark"}>
          INDUSTRIES
        </Heading>
      </div>
      <CardIndustryGroup data={industriesMockedData} />
    </section>
  );
};

export default Industries;
