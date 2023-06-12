import { FC } from "react";
import styles from "./Heading.module.scss";

/* 
  Web accessibility
  - Role is not required as the <h1>, <h2> and <h3> tags infers the role as headings.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role.

  Unit testing
  - To access the <h1>, <h2> and <h3> tags, use the role (getByRole).
*/

interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3";
  colour?: "base__dark" | "primary__dark" | "base__light";
}

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
