import { FC, useState } from "react";
import styles from "./NavigationBar.module.scss";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import NavigationLink from "../navigationLink/NavigationLink";

/* 
  Web accessibility
  - Role is not required as the <nav> tag infers the role as navigation.
  - Aria label is not required as there is only one navigation bar.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role.

  - Roles and aria labels are required for <div> tags since it can be used for different purposes.

  Unit testing
  - The unique aria label can be used to determine if the containers are present in other components e.g. navigation bar.
  - For more information on button, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role.
  - For more information on menubar, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role.
*/

const NavigationBar: FC = () => {
  const navigationLinks = [
    {
      name: "Services",
      destination: "#services",
    },
    {
      name: "Industries",
      destination: "#industries",
    },
    {
      name: "About",
      destination: "#about",
    },
  ];

  // method to display navigation links
  const displayNavigationLinks = navigationLinks.map((link) => {
    return (
      <NavigationLink
        key={link.name}
        name={link.name}
        destination={link.destination}
      />
    );
  });

  // method to toggle vertical navigation links
  const [verticalLinks, setVerticalLinks] = useState<boolean>(false);

  const toggleVerticalLinks = () => {
    return setVerticalLinks(!verticalLinks);
  };

  return (
    <nav className={styles.container}>
      <Logo />
      <div
        className={styles.links__vertical__container}
        onClick={toggleVerticalLinks}
        role="button"
        aria-label="vertical links container"
      >
        <Icon />
        {verticalLinks && (
          <div
            className={styles.links__vertical}
            role="menubar"
            aria-label="vertical links"
          >
            {displayNavigationLinks}
          </div>
        )}
      </div>
      <div
        className={styles.links__horizontal__container}
        role="menubar"
        aria-label="horizontal links"
      >
        <div className={styles.links__horizontal}>{displayNavigationLinks}</div>
      </div>
    </nav>
  );
};

export default NavigationBar;
