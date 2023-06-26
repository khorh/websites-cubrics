import { FC, useEffect, useState } from "react";
import styles from "./Industries.module.scss";
import CardIndustryGroup from "../../designSystem/card/cardIndustryGroup/CardIndustryGroup";
import Heading from "../../designSystem/heading/Heading";
import { IIndustry } from "./Industries.type";
import { client } from "../../useContentful";

const Industries: FC = () => {
  const [industries, setIndustries] = useState<IIndustry[]>([]);

  const getIndustries = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "industries",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching industries ${error}`);
    }
  };

  useEffect(() => {
    getIndustries().then((response: any) => setIndustries(response));
  });

  return (
    <section
      id={"industries"}
      className={styles.container}
      aria-label={"industries-section"}
    >
      <article className={styles.title} aria-label={"industries-title"}>
        <Heading type={"h2"} colour={"primary__dark"}>
          INDUSTRIES
        </Heading>
      </article>
      <CardIndustryGroup data={industries} />
    </section>
  );
};

export default Industries;
