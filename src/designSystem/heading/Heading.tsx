import { FC } from "react";
import styles from "./Heading.module.scss";
import { IHeading } from "./Heading.type";

const Heading: FC<IHeading> = (props) => {
  // defaults
  const colour = props.colour ?? "base__dark";

  switch (props.type) {
    case "h1":
      return (
        <h1 className={`${styles.common} ${styles[colour]}`}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles.common} ${styles[colour]}`}>
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${styles.common} ${styles[colour]}`}>
          {props.children}
        </h3>
      );
  }
};

export default Heading;
