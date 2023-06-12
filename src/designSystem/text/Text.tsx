import { FC } from "react";
import styles from "./Text.module.scss";

interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
  type: "p1" | "p2" | "footer";
  colour?: "base__dark" | "base__light";
}

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
