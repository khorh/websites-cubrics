import { FC } from "react";
import styles from "./Text.module.scss";

/* 
  Web accessibility
  - Role is not required as the <p> tag infers the role as a paragraph.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles.

  Unit testing
  - To access the <p> tag, use the content (getByText) rather than the role (getByRole).
*/

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
