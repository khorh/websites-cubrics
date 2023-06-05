import { FC, useState } from "react";
import styles from "./NavigationBar.module.scss";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import NavigationLink from "../navigationLink/NavigationLink";

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
        className={styles.menuIcon__container}
        onClick={toggleVerticalLinks}
        role={"button"}
        aria-label="menu icon"
      >
        <Icon />
        {verticalLinks && (
          <div className={styles.links__vertical}>{displayNavigationLinks}</div>
        )}
      </div>
      <div className={styles.links__container}>
        <div className={styles.links__horizontal}>{displayNavigationLinks}</div>
      </div>
    </nav>
  );
};

export default NavigationBar;
