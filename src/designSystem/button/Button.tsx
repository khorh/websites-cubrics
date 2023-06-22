import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  email?: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <a href={`mailto:${props.email}`}>
      <button className={styles.common}>{props.children}</button>
    </a>
  );
};

export default Button;
