import React, { useState, useEffect } from "react";

import BackToTop from "components/BackToTop";
import Navbar from "components/navbar/Navbar";
import Introduction from "components/Introduction";
import About from "components/About";
import Skills from "components/skills/Skills";
import FeaturedProjects from "components/projects/featured-projects/FeaturedProjects";
import GetNotified from "components/GetNotified";
import Contact from "components/Contact";
import Footer from "components/Footer";

import logo from "assets/logos/logo.png";

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
          <BackToTop />
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
