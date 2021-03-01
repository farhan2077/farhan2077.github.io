import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { navItems } from "./navbarInfo";
import logo250 from "../../images/logo/logo250.png";

export default function Navbar() {
  return (
    <>
      <nav className="invisible sm:visible">
        <div className="flex flex-col md:flex-row font-secondary text-md justify-between mt-5 items-center">
          <Link to="/">
            <img
              className="h-auto md:h-7 w-8 md:w-auto"
              src={logo250}
              alt="logo"
            />
          </Link>
          <div className="flex gap-x-0 sm:gap-x-16 items-center mr-10">
            {navItems.map((item) =>
              item.navItem !== "resume" ? (
                <HashLink
                  key={item.id}
                  smooth
                  to={item.navItemUrl}
                  className="capitalize text-gray-500 hover:text-gray-700 tracking-tight"
                >
                  {item.navItem}
                </HashLink>
              ) : (
                <a
                  key={item.id}
                  href={item.navItemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-400 rounded px-4 py-2 shadow-sm text-gray-500 hover:text-gray-700 hover:border-gray-500 tracking-tight"
                >
                  {item.navItem}
                </a>
              )
            )}
          </div>
        </div>
        <HashLink to="/#form"></HashLink>
      </nav>
    </>
  );
}
