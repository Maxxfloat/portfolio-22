import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";
import { useRouter } from "next/router";
import TranslationBtn from "./TranslationBtn";
import NavbarTitle from "./NavbarTitle";

function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className="flex items-center justify-between">
      <li className="text-lg font-bold list-none cursor-pointer">
        <NavbarTitle />
      </li>
      <ul className="flex items-center space-x-10">
        <TranslationBtn />
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                pathname === item.path
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
