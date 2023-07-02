import { FC } from "react";
import styles from "./NavigationLink.module.scss";
import { INavigationLink } from "./NavigationLink.type";

const NavigationLink: FC<INavigationLink> = (props) => {
  return (
    <a
      className={styles.common}
      href={props.destination}
      role={"menuitem"}
      data-testid={props.dataTestId}
    >
      {props.name}
    </a>
  );
};

export default NavigationLink;
