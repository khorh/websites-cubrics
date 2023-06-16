import { FC } from "react";
import { iconMockedImages } from "./Icon.mocked";
/* 
  Web accessibility
  - Role is not required as the <img /> tag infers the role.
  - Aria label is not required as the alt attribute infers the label.
  - For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.

  Unit testing
  - The unique alt attribute is to be used to determine if the icon is present in other components e.g. navigation bar.
*/

interface IIcon extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
}

const Icon: FC<IIcon> = (props) => {
  const filterIcons = iconMockedImages.filter(
    (icon) => icon.icon_name == props.name
  );

  const displayIcon = filterIcons.map((icon) => {
    return <img src={icon.icon_url} alt={icon.icon_alt} key={icon.icon_name} />;
  });

  return <>{displayIcon}</>;
};

export default Icon;
