import { FC, useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import Text from "../../designSystem/text/Text";
import { client } from "../../useContentful";

interface IFooterResponse {
  copyright: string;
}

const Footer: FC = () => {
  const [footer, setFooter] = useState<IFooterResponse[]>([]);

  const getFooter = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "footer",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return { ...item.fields };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching footer ${error}`);
    }
  };

  useEffect(() => {
    getFooter().then((response: any) => setFooter(response));
  });

  const displayFooterContent = footer.map((item) => {
    return (
      <Text type={"footer"} key={item.copyright}>
        {item.copyright}
      </Text>
    );
  });

  return <footer className={styles.container}>{displayFooterContent}</footer>;
};

export default Footer;
