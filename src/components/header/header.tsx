import React from "react";
import NavItem from "./nav-item";

const NAV_LINKS = [
  { label: "Homepage", href: "/" },
  { label: "Artists", href: "/" },
];

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto flex justify-between ">
      <div>LOGO</div>
      <nav>
        <ul className="flex gap-5">
          {NAV_LINKS.map((link, i) => (
            <NavItem key={i} link={link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
