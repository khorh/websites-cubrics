import { FC } from "react";
import { IIcon } from "./Icon.type";
import { iconList } from "./IconList";
import { IIconList } from "./IconList.type";

const Icon: FC<IIcon> = (props) => {
  const filterIcons = iconList.filter(
    (icon: IIconList) => icon.name === props.name
  );

  const displayIcon = filterIcons.map((icon: IIconList) => {
    return <img src={icon.src} alt={icon.alt} key={icon.name} />;
  });

  return <>{displayIcon}</>;
};

export default Icon;
