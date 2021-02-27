import React from "react";
import { HashLink } from "react-router-hash-link";

import logoImage from "../images/logo/logo.png";

const navItems = [
  {
    id: 1,
    navItem: "about",
    navItemUrl: "/#about",
  },
  {
    id: 2,
    navItem: "project",
    navItemUrl: "/#project",
  },
  {
    id: 3,
    navItem: "contact",
    navItemUrl: "/#contact",
  },
  {
    id: 4,
    navItem: "resume",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="invisible md:visible">
        <div className="flex flex-col md:flex-row font-secondary text-md justify-between mt-5 items-center">
          <img
            className="h-auto md:h-6 w-8 bg-gray-100 md:w-auto"
            src={logoImage}
            alt="logo"
          />
          <div className="flex gap-x-20 items-center text-gray-500 capitalize">
            {navItems.map((item) =>
              item.navItem !== "resume" ? (
                <HashLink key={item.id} smooth to={item.navItemUrl}>
                  {item.navItem}
                </HashLink>
              ) : (
                <a
                  key={item.id}
                  href="https://farhan2077.github.io/"
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
