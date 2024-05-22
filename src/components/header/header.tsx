"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./nav-item";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Homepage", href: "/" },
  { label: "Artists", href: "/artists" },
];

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState<{
    visible: boolean;
    translateY: string;
    sliding: boolean;
  }>({
    visible: true,
    translateY: "0%",
    sliding: false,
  });
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const scrollHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setHeaderStyle({
          visible: true,
          translateY: "0%",
          sliding: true,
        });
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderStyle({
          visible: false,
          translateY: "-100%",
          sliding: true,
        });
      }

      if (currentScrollY <= 100) {
        setHeaderStyle({
          visible: true,
          translateY: "0%",
          sliding: false,
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, [lastScrollY, headerStyle]);
  useEffect(() => {
    const initialScrollY = window.scrollY;
    if (initialScrollY > 100) {
      setHeaderStyle({
        visible: false,
        translateY: "-100%",
        sliding: true,
      });
    } else {
      setHeaderStyle({
        visible: true,
        translateY: "0%",
        sliding: false,
      });
    }
  }, []);

  return (
    <header
      className={`bg-muted   block z-50 fixed w-full py-4 top-0 inset-x-0 transition-transform duration-700 ease-in-out ${
        headerStyle.sliding
          ? "shadow-md rounded-bl-2xl rounded-br-2xl  lg:rounded-bl-full lg:rounded-br-full"
          : ""
      }`}
      style={{
        transform: `translateY(${headerStyle.translateY})`,
      }}
    >
      <div className=" max-w-5xl xl:max-w-6xl mx-auto flex justify-between  ">
        <Link href={"/"}>
          <Image src="/logo2.png" alt="logo" width={150} height={100} />
        </Link>
        <nav className="flex  items-center">
          <ul className="flex gap-5 ">
            {NAV_LINKS.map((link, i) => (
              <NavItem key={i} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
