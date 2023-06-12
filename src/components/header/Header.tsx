import { FC } from "react";
import styles from "./Header.module.scss";
import Button from "../../designSystem/button/Button";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";

/* 
  Web accessibility
  - Role is not required as the <header> tag infers the role as banner.
  - Aria label is not required as there is only one header.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role.

  - Roles are not added to <div> tags since it can be used for different purposes. Instead unique aria labels have been added.

  Unit testing
  - The unique aria label can be used to determine if the different containers are present.
*/

const Header: FC = () => {
  return (
    <header className={styles.background}>
      <div className={styles.content} aria-label="header content">
        <div className={styles.titles} aria-label="header titles">
          <Heading type={"h1"} colour={"base__light"}>
            Accelerating digital transformation
          </Heading>
          <Text type={"p2"} colour={"base__light"}>
            Driving success for global brand leaders
          </Text>
        </div>
        <Button>Contact</Button>
      </div>
    </header>
  );
};

export default Header;
