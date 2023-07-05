import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Button from "../../designSystem/button/Button";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";
import { IHeader } from "./Header.type";
import { client } from "../../useContentful";

const Header: FC = () => {
  const [header, setHeader] = useState<IHeader[]>([]);

  const getHeader = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "header",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return { ...item.fields };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching header ${error}`);
    }
  };

  useEffect(() => {
    getHeader().then((response: any) => setHeader(response));
  }, []);

  const displayHeader = header.map((item: IHeader) => {
    return (
      <div
        className={styles.content}
        aria-label={"header-content"}
        key={item.title}
      >
        <div className={styles.titles} aria-label={"header-titles"}>
          <Heading type={"h1"} colour={"base__light"}>
            {item.title}
          </Heading>
          <Text type={"p1"} colour={"base__light"}>
            {item.subTitle}
          </Text>
        </div>
        <Button email={item.email}>Contact</Button>
      </div>
    );
  });

  return <header className={styles.background}>{displayHeader}</header>;
};

export default Header;
