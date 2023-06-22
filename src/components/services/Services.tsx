import { FC } from "react";
import styles from "./Services.module.scss";
import Heading from "../../designSystem/heading/Heading";
import CardServiceGroup from "../../designSystem/card/cardServiceGroup/CardServiceGroup";
import { serviceMockedData } from "./Services.mocked";

const Services: FC = () => {
  return (
    <section
      id={"services"}
      className={styles.container}
      aria-label={"services-section"}
    >
      <article className={styles.title} aria-label={"services-title"}>
        <Heading type={"h2"} colour={"primary__dark"}>
          SERVICES
        </Heading>
      </article>
      <CardServiceGroup data={serviceMockedData} />
    </section>
  );
};

export default Services;
