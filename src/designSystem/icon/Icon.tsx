import { FC } from "react";
import { iconMockedImages } from "./IconList";

interface IIcon extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
}

const Icon: FC<IIcon> = (props) => {
  const filterIcons = iconMockedImages.filter(
    (icon) => icon.name === props.name
  );

  const displayIcon = filterIcons.map((icon) => {
    return <img src={icon.src} alt={icon.alt} key={icon.name} />;
  });

  return <>{displayIcon}</>;
};

export default Icon;
