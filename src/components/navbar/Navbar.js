import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { debounce } from "utils/debounce";
import { navItems } from "./navbarInfo";
import logo from "assets/logos/logo.png";
import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navShadowVisible, setNavShadowVisible] = useState(false);
  const [navShadowVisibleMobile, setNavShadowVisibleMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  // mobile menu open/close func
  const onClickMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuIconAnimation = mobileMenuOpen ? "fadeout" : "fadein";
  const closeIconAnimation = mobileMenuOpen ? "fadein" : "fadeout";

  const navShadowMobile = navShadowVisibleMobile ? "shadow" : "none";

  // navbar changes while scrolling -- DESKTOP
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

    if (window.scrollY > 50) {
      setNavShadowVisibleMobile(true);
    } else {
      setNavShadowVisibleMobile(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => window.removeEventListener("scroll, touchmove", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    window.addEventListener("touchmove", handleScroll);

    return () => window.removeEventListener("touchmove", handleScroll);
  }, [handleScroll]);

  const navbarStyle = {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    transition: "top 0.35s",
  };

  return (
    <nav className="relative z-10">
      {/* desktop */}
      <div className="invisible md:visible">
        <div
          id="navbar"
          style={{
            ...navbarStyle,
            top: visible ? "0" : "-5.25rem",
            // with resume, top> -84/16=5.25rem & without resume, top> -68/16= 4.25rem
            boxShadow: navShadowVisible ? "0 1px 5px #D1D5DB" : "none",
          }}
        >
          <div className="p-5 bg-gray-50">
            <div className="md:container px-4 sm:px-10 lg:px-20 xl:px-52">
              <div className="flex flex-col md:flex-row text-md justify-between items-center">
                <Link to="/" onClick={scrollToTop}>
                  <img
                    className="h-auto md:h-7 w-8 md:w-auto"
                    src={logo}
                    alt="logo"
                  />
                </Link>
                <div className="flex gap-x-0 sm:gap-x-10 items-center mr-10 font-secondary">
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
                        href={
                          process.env.PUBLIC_URL + "/resume_farhan-bin-amin.pdf"
                        }
                        className="capitalize text-blue-500 hover:text-blue-700 tracking-tight"
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

      {/* mobile */}
      <div className={`visible sm:hidden`}>
        <div
          id="navbar"
          style={{
            ...navbarStyle,
            top: visible ? "0" : "-5.25rem",
            boxShadow: navShadowVisible ? "0 1px 5px #D1D5DB" : "none",
          }}
        >
          <div
            className={`absolute top-0 inset-x-0 px-4 py-3 bg-gray-50 ${navShadowMobile} `}
          >
            <div className="flex justify-between font-secondary">
              <div className="mt-3">
                <Link to="/">
                  <img className="h-auto w-11" src={logo} alt="logo" />
                </Link>
              </div>
              <div className="">
                {!mobileMenuOpen ? (
                  <MenuIcon
                    className={`w-12 text-gray-500 stroke-current stroke-1 ${menuIconAnimation}`}
                    onClick={onClickMobileMenu}
                  />
                ) : (
                  <div className="flex flex-col items-end h-screen">
                    <CloseIcon
                      className={`w-12 text-gray-500 stroke-current stroke-1 ${closeIconAnimation}`}
                      onClick={onClickMobileMenu}
                    />
                    <div
                      className={`flex flex-col items-end pr-2.5 ${closeIconAnimation}`}
                    >
                      {navItems.map((item) =>
                        item.navItem !== "resume" ? (
                          <HashLink
                            key={item.id}
                            smooth
                            to={item.navItemUrl}
                            className="capitalize text-gray-500 tracking-tight mt-4 text-4xl leading-normal"
                            onClick={onClickMobileMenu}
                          >
                            {item.navItem}
                          </HashLink>
                        ) : (
                          <a
                            key={item.id}
                            href={
                              process.env.PUBLIC_URL +
                              "/resume_farhan-bin-amin.pdf"
                            }
                            className="capitalize text-blue-600 tracking-tight mt-4 text-4xl leading-normal"
                            onClick={onClickMobileMenu}
                          >
                            {item.navItem}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
