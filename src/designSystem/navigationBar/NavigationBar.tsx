import { FC } from "react";
import styles from "./NavigationBar.module.scss";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import NavigationLink from "../navigationLink/NavigationLink";

const NavigationBar: FC = () => {
  const navigationLinks = [
    {
      name: "Services",
      destination: "",
    },
    {
      name: "Clients",
      destination: "",
    },
    {
      name: "About",
      destination: "",
    },
  ];

  const displayNavigationLinks = navigationLinks.map((link) => {
    return <NavigationLink name={link.name} destination={link.destination} />;
  });

  return (
    <nav className={styles.container}>
      <Logo />
      <div className={styles.links__container}>
        <div className={styles.links}>{displayNavigationLinks}</div>
      </div>
      <div className={styles.menuIcon__container}>
        <Icon />
      </div>
    </nav>
  );
};

export default NavigationBar;
