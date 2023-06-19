import { FC } from "react";
import styles from "./NavigationLink.module.scss";

interface INavigationLink extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  destination: string;
}

const NavigationLink: FC<INavigationLink> = (props) => {
  return (
    <a
      className={styles.common}
      href={props.destination}
    >
      {props.name}
    </a>
  );
};

export default NavigationLink;
