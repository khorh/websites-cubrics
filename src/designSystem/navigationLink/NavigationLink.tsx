import { FC } from "react";
import styles from "./NavigationLink.module.scss";

/* 
  Web accessibility
  - Role is not required as the <a> tag infers the role as a link.
  - Aria label is added since the <a> tag can be used for other types of links e.g. paragraph links.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role.

  Unit testing
  - The unique aria label can be used to determine if the link is present in other components e.g. navigation bar.
*/

interface INavigationLink extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  destination: string;
}

const NavigationLink: FC<INavigationLink> = (props) => {
  return (
    <a
      className={styles.common}
      href={props.destination}
      aria-label="navigation link"
    >
      {props.name}
    </a>
  );
};

export default NavigationLink;
