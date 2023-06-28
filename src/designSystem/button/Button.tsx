import { FC } from "react";
import styles from "./Button.module.scss";
import { IButton } from "./Button.type";

const Button: FC<IButton> = (props) => {
  return (
    <a href={`mailto:${props.email}`}>
      <button className={styles.common}>{props.children}</button>
    </a>
  );
};

export default Button;
