import { FC } from "react";
import LogoCubrics from "./logo-cubrics.svg";

/* 
  Web accessibility
  - Role is not required as the <img /> tag infers the role.
  - Aria label is not required as the alt attribute infers the label.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.

  Unit testing
  - The unique alt attribute is to be used to determine if the logo is present in other components e.g. navigation bar.
*/

const Logo: FC = () => {
  return <img src={LogoCubrics} alt="cubrics logo" />;
};

export default Logo;
