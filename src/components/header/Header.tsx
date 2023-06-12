import { FC } from "react";
import styles from "./Header.module.scss";
import Button from "../../designSystem/button/Button";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";

const Header: FC = () => {
  return (
    <header className={styles.background}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <Heading type={"h1"} colour={"base__light"}>
            Accelerating digital transformation
          </Heading>
          <Text type={"p2"} colour={"base__light"}>
            Driving success for global brand leaders
          </Text>
        </div>
        <Button>Contact</Button>
      </div>
    </header>
  );
};

export default Header;
