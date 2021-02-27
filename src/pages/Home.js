import React from "react";
import Navbar from "../partials/Navbar";
import Introduction from "../partials/Introduction";

export default function Home() {
  return (
    <>
      {/* container start */}
      <div className="md:container px-4 xs:px-10 sm:px-10 lg:px-20 xl:px-52">
        <div>
          <Navbar />
        </div>
      </div>
      {/* container end */}
    </>
  );
}
