import { FC } from "react";
import styles from "./Service.module.scss";
import Heading from "../../designSystem/heading/Heading";
import CardServiceGroup from "../../designSystem/card/cardServiceGroup/CardServiceGroup";
import { serviceMockedData } from "./Service.mocked";

const Service: FC = () => {
  return (
    <section id={"services"} className={styles.common}>
      <article className={styles.title}>
        <Heading type={"h2"} colour={"primary__dark"}>
          SERVICES
        </Heading>
      </article>
      <article className={styles.services}>
        <CardServiceGroup data={serviceMockedData} />
      </article>
    </section>
  );
};

export default Service;
