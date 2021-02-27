import React from "react";
import { HashLink } from "react-router-hash-link";

import { navItems } from "./navbarInfo";
import logoImage from "../../images/logo/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="invisible sm:visible">
        <div className="flex flex-col md:flex-row font-secondary text-md justify-between mt-5 items-center">
          <img
            className="h-auto md:h-6 w-8 md:w-auto"
            src={logoImage}
            alt="logo"
          />
          <div className="flex gap-x-0 sm:gap-x-20 items-center text-gray-500 capitalize">
            {navItems.map((item) =>
              item.navItem !== "resume" ? (
                <HashLink key={item.id} smooth to={item.navItemUrl}>
                  {item.navItem}
                </HashLink>
              ) : (
                <a
                  key={item.id}
                  href={item.navItemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-400 rounded px-4 py-2 shadow-sm"
                >
                  {item.navItem}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
