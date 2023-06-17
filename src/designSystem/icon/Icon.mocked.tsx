import FilePost from "./iconImages/file-post.svg";
import Hurricane from "./iconImages/hurricane.svg";
import Menu from "./iconImages/list.svg";
import People from "./iconImages/people.svg";

interface IIconMockedImages {
  icon_name: string;
  icon_url: string;
  icon_alt: string;
}

export const iconMockedImages: IIconMockedImages[] = [
  {
    icon_name: "file post",
    icon_url: FilePost,
    icon_alt: "file post icon",
  },
  {
    icon_name: "hurricane",
    icon_url: Hurricane,
    icon_alt: "hurricane icon",
  },
  {
    icon_name: "menu",
    icon_url: Menu,
    icon_alt: "menu icon",
  },
  {
    icon_name: "people",
    icon_url: People,
    icon_alt: "people icon",
  },
];
