import { FC } from "react";
import styles from "./Footer.module.scss";
import Text from "../../designSystem/text/Text";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <Text type={"footer"}>© Copyright Cubrics 2023</Text>
    </footer>
  );
};

export default Footer;
