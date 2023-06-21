import { FC, useState } from "react";
import styles from "./NavigationBar.module.scss";
import Icon from "../../designSystem/icon/Icon";
import Logo from "../../designSystem/logo/Logo";
import NavigationLink from "../../designSystem/navigationLink/NavigationLink";

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
    <nav className={styles.container} role={"menu"}>
      <Logo />
      <div
        className={styles.links__vertical__container}
        onClick={toggleVerticalLinks}
        role="button"
        aria-label="vertical links container"
      >
        <Icon name={"menu"} />
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
