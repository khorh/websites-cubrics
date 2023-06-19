import { FC } from "react";
import { iconMockedImages } from "./Icon.mocked";

interface IIcon extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
}

const Icon: FC<IIcon> = (props) => {
  const filterIcons = iconMockedImages.filter(
    (icon) => icon.icon_name === props.name
  );

  const displayIcon = filterIcons.map((icon) => {
    return <img src={icon.icon_url} alt={icon.icon_alt} key={icon.icon_name} />;
  });

  return <>{displayIcon}</>;
};

export default Icon;
