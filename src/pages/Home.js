import React from "react";

import BackToTop from "components/BackToTop";
import Navbar from "components/navbar/Navbar";
import Introduction from "components/Introduction";
import About from "components/About";
import Skills from "components/skills/Skills";
import FeaturedProjects from "components/projects/featured-projects/FeaturedProjects";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Work from "components/Work";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Navbar />
      <div className="md:container px-4 sm:px-10 lg:px-20 xl:px-52">
        <div>
          <Introduction />
          <About />
          <div className="m-28"></div>
          <Work />
          <div className="m-28"></div>
          <Skills />
          <div className="m-28"></div>
          <FeaturedProjects />
          <div className="m-32"></div>
          <Contact />
          <div className="m-16"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
