import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = (props) => {
  return <button className={styles.common}>{props.children}</button>;
};

export default Button;
