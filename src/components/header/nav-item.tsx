import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

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
      <Link
        className={cn(
          buttonVariants({ variant: "link" }),
          "text-base hover:scale-105 transition-all duration-200"
        )}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
