import { FC } from "react";
import styles from "./About.module.scss";
import CardAboutGroup from "../../designSystem/card/cardAboutGroup/CardAboutGroup";
import Heading from "../../designSystem/heading/Heading";
import { aboutMockedData } from "./About.mocked";

const About: FC = () => {
  return (
    <section className={styles.common}>
      <article className={styles.title}>
        <Heading type={"h2"} colour={"primary__dark"}>
          ABOUT
        </Heading>
      </article>
      <CardAboutGroup data={aboutMockedData} />
    </section>
  );
};

export default About;
