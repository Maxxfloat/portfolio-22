import Link from "next/link";
import React from "react";

const NavbarTitle = () => {
  return (
    <Link href="/">
      <span className="flex items-center text-xl font-black">
        {"Omid-Neshati".split("").map((letter, index) => {
          return (
            <span
              key={index}
              className="transition-all duration-500 hover:text-fun-pink hover:-mt-2 hover:duration-100 click:goodbyeLetterAnim"
            >
              {letter}
            </span>
          );
        })}
      </span>
    </Link>
  );
};

export default NavbarTitle;
