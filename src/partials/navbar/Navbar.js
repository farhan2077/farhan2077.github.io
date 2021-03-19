import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { debounce } from "../../utils/debounce";
import { navItems } from "./navbarInfo";
import logo250 from "../../images/logo/logo250.png";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navShadowVisible, setNavShadowVisible] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    if (window.scrollY > 150) {
      setNavShadowVisible(true);
    } else {
      setNavShadowVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyle = {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    transition: "top 0.35s",
  };

  return (
    <div className="invisible md:visible ">
      <div
        id="navbar"
        style={{
          ...navbarStyle,
          top: visible ? "0" : "-4.25rem",
          // with resume, top> -84/16=5.25rem & without resume, top> -68/16= 4.25rem
          boxShadow: navShadowVisible ? "0 1px 5px #D1D5DB" : "none",
        }}
      >
        <div className="p-5 bg-gray-50">
          <div className="md:container px-4 sm:px-10 lg:px-20 xl:px-52">
            <div className="flex flex-col md:flex-row font-secondary text-md justify-between items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
