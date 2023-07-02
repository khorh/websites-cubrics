import { FC, useState } from "react";
import styles from "./Navigation.module.scss";
import Icon from "../../designSystem/icon/Icon";
import Logo from "../../designSystem/logo/Logo";
import NavigationLink from "../../designSystem/navigationLink/NavigationLink";
import { INavigationLink } from "../../designSystem/navigationLink/NavigationLink.type";
import { navigationLinks } from "./NavigationLinks";

const NavigationBar: FC = () => {
  const [verticalLinks, setVerticalLinks] = useState<boolean>(false);

  const displayNavigationLinks = navigationLinks.map(
    (link: INavigationLink) => {
      return (
        <NavigationLink
          key={link.name}
          name={link.name}
          destination={link.destination}
          dataTestId={link.dataTestId}
        />
      );
    }
  );

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
        data-testid="vertical-links-container"
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
        aria-label="horizontal links container"
        data-testid="horizontal-links-container"
      >
        <div className={styles.links__horizontal}>{displayNavigationLinks}</div>
      </div>
    </nav>
  );
};

export default NavigationBar;
