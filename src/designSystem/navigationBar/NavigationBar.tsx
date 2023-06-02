import { FC } from "react";
import styles from "./NavigationBar.module.scss";
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
    <nav className={styles.navigationBar}>
      <Logo />
      <div className={styles.navigationLinks}>{displayNavigationLinks}</div>
    </nav>
  );
};

export default NavigationBar;
