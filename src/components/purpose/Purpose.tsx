import { FC } from "react";
import styles from "./Purpose.module.scss";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";

const Purpose: FC = () => {
  return (
    <section className={styles.common} aria-label={"purpose-section"}>
      <Heading type={"h2"} colour={"primary__dark"}>
        PURPOSE
      </Heading>
      <Text type={"p1"}>
        Our purpose is to realise our client's business value by delivering high
        quality results, at a faster pace and lowering your transformation
        costs.
      </Text>
    </section>
  );
};

export default Purpose;
