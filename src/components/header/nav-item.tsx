import Link from "next/link";
import React from "react";

interface INavItem {
  link: {
    label: string;
    href: string;
  };
}

const NavItem = ({ link }: INavItem) => {
  const { label, href } = link;
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
