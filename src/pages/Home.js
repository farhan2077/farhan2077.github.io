import React, { useState, useEffect } from "react";

import Navbar from "../partials/navbar/Navbar";
import Introduction from "../partials/Introduction";
import About from "../partials/About";
import Skills from "../partials/skills/Skills";
import FeaturedProjects from "../partials/projects/featured-projects/FeaturedProjects";
import GetNotified from "../partials/GetNotified";
import Contact from "../partials/Contact";
import Footer from "../partials/Footer";

import logo from "../images/logo/logo250.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1650);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center h-screen fadeoutDelay">
          <img
            src={logo}
            alt="site_logo"
            className="h-10 w-auto animate-bounce mb-10 sm:mb-0"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="md:container px-4 sm:px-10 lg:px-20 xl:px-52">
            <div className="fadein">
              <Introduction />
              <About />
              <div className="m-28"></div>
              <Skills />
              <div className="m-28"></div>
              <FeaturedProjects />
              <div className="m-28"></div>
              <GetNotified />
              <div className="m-28"></div>
              <Contact />
              <div className="m-16"></div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
