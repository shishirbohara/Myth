"use client";
import { navIcons, navLinks } from "@/utils/navLinks";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center lg:px-40 px-2 py-4 container mx-auto">
        <div className="flex items-center gap-1">
          <Image
            src={"/images/logo.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="w-16"
          />
          <h1 className="text-xl font-bold">Wears</h1>
        </div>

        <div className="lg:flex text-lg space-x-12 hidden">
          {navLinks.map((navs, index) => (
            <Link key={index} href={navs.href} className="flex items-center">
              {navs.label}
              {navs.icon && <navs.icon size={25} />}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          {navIcons.map((icons, index) => (
            <div key={index}>
              <icons.icon size={25} className="cursor-pointer" />
            </div>
          ))}
        </div>

        <button onClick={toggleMenu} className="lg:hidden z-30">
          {isMenuOpen ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      <div
        className={`lg:hidden z-10 bg-white py-4 space-y-3 fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center transform transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((navs, index) => (
          <Link
            key={index}
            href={navs.href}
            className="text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {navs.label}
          </Link>
        ))}
      </div>
    </>
  );
}
