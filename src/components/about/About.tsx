import { FC, useEffect, useState } from "react";
import styles from "./About.module.scss";
import CardAboutGroup from "../../designSystem/card/cardAboutGroup/CardAboutGroup";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";
import { IAbout } from "./About.type";
import { client } from "../../useContentful";

const About: FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [about, setAbout] = useState<IAbout[]>([]);

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
      setErrorMessage("Data unavailable");
    }
  };

  useEffect(() => {
    getAbout().then((response: any) => {
      if (response) {
        setIsSuccess(true);
        setAbout(response);
      }
    });
  }, []);

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
      {isSuccess ? (
        <CardAboutGroup data={about} />
      ) : (
        <article className={styles.errorMessage}>
          <Text type={"p2"}>{errorMessage}</Text>
        </article>
      )}
    </section>
  );
};

export default About;
