import { FC } from "react";
import styles from "./Button.module.scss";

/* 
  Web accessibility
  - Role is not required as the <button> tag infers the role as button.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role.

  Unit testing
  - To access the <button> tag, use the role (getByRole).
*/

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = (props) => {
  return <button className={styles.common}>{props.children}</button>;
};

export default Button;
