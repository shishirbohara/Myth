import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface navLinksProps {
  label: string;
  href: string;
  icon?: IconType;
}

interface navIconsProps {
  icon: IconType;
}

export const navLinks: navLinksProps[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", icon: RiArrowDropDownLine },
  { label: "Contact", href: "/contact" },
];

export const navIcons: navIconsProps[] = [
  { icon: CiSearch },
  { icon: CiShoppingCart },
  { icon: CiUser },
];
