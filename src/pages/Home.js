import React from "react";
import Navbar from "../partials/navbar/Navbar";
import Introduction from "../partials/Introduction";
import About from "../partials/About";
import Skills from "../partials/skills/Skills"

export default function Home() {
  return (
    <>
      {/* container start */}
      <div className="md:container px-4 sm:px-10 lg:px-20 xl:px-52">
        <div>
          <Navbar />
          <Introduction />
          <About />
          <div className="m-28"></div>
          <Skills />
        </div>
      </div>
      {/* container end */}
    </>
  );
}
