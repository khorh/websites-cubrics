import { FC, useEffect, useState } from "react";
import styles from "./Services.module.scss";
import Heading from "../../designSystem/heading/Heading";
import CardServiceGroup from "../../designSystem/card/cardServiceGroup/CardServiceGroup";
import { IServices } from "./Services.type";
import { client } from "../../useContentful";

const Services: FC = () => {
  const [services, setServices] = useState<IServices[]>([]);

  const getServices = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "services",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching services ${error}`);
    }
  };

  useEffect(() => {
    getServices().then((response: any) => setServices(response));
  });

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
      <CardServiceGroup data={services} />
    </section>
  );
};

export default Services;
