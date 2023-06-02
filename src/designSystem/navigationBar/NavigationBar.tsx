import { FC } from "react";
import styles from "./NavigationBar.module.scss";
import Logo from "../logo/Logo";

const NavigationBar: FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <Logo />
    </nav>
  );
};

export default NavigationBar;
