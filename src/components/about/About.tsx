import { FC, useEffect, useState } from "react";
import styles from "./About.module.scss";
import CardAboutGroup from "../../designSystem/card/cardAboutGroup/CardAboutGroup";
import Heading from "../../designSystem/heading/Heading";
import { client } from "../../useContentful";

interface IAboutResponse {
  title: string;
  description: string;
  order: number;
}

const About: FC = () => {
  const [about, setAbout] = useState<IAboutResponse[]>([]);

  const getAbout = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "about",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching about ${error}`);
    }
  };

  useEffect(() => {
    getAbout().then((response: any) => setAbout(response));
  });

  return (
    <section
      id={"about"}
      className={styles.container}
      aria-label={"about-section"}
    >
      <article className={styles.title} aria-label={"about-title"}>
        <Heading type={"h2"} colour={"primary__dark"}>
          ABOUT
        </Heading>
      </article>
      <CardAboutGroup data={about} />
    </section>
  );
};

export default About;
