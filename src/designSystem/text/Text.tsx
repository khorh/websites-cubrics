import { FC } from "react";
import styles from "./Text.module.scss";
import { IText } from "./Text.type";

const Text: FC<IText> = (props) => {
  // defaults
  const colour = props.colour ?? "base__dark";

  return (
    <p className={`${styles.common} ${styles[props.type]} ${styles[colour]}`}>
      {props.children}
    </p>
  );
};

export default Text;
