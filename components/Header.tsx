import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Instagram", path: "/" },
  { label: "TikTok", path: "/" },
  { label: "FAQ", path: "/" },
  { label: "Contact", path: "/" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-lg py-4 px-10">
      <Image
        src={"/logo.png"}
        className="w-8 h-8"
        width={500}
        height={500}
        alt="siiweul logo"
      />
      <nav className="flex gap-4">
        {navItems.map((item, i) => (
          <Link
            className="px-4 py-2 rounded-md hover:bg-slate-400/20"
            key={i}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button>Partager</Button>
    </header>
  );
};

export default Header;
