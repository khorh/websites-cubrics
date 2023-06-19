import { FC } from "react";
import styles from "./Services.module.scss";
import Heading from "../../designSystem/heading/Heading";
import CardServiceGroup from "../../designSystem/card/cardServiceGroup/CardServiceGroup";
import { serviceMockedData } from "./Services.mocked";

const Services: FC = () => {
  return (
    <section id={"services"} className={styles.common} aria-label="services-section">
      <article className={styles.title} aria-label="title">
        <Heading type={"h2"} colour={"primary__dark"}>
          SERVICES
        </Heading>
      </article>
      <article className={styles.serviceGroup} aria-label="serviceGroup">
        <CardServiceGroup data={serviceMockedData} />
      </article>
    </section>
  );
};

export default Services;
