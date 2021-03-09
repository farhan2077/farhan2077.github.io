import React from "react";
import { HashLink } from "react-router-hash-link";

import wave from "../images/emojis/wave.png";

export default function Introduction() {
  return (
    <>
      <main className="-mt-32 md:-mt-16 h-screen">
        <div className="flex items-center h-full">
          <div className="font-primary">
            <p className="text-gray-600 text-xl">
              <img src={wave} alt="Hi" className="inline w-6 mr-2 mb-1" />
              there!
            </p>
            <h1 className="my-16 md:my-20 text-gray-600 font-bold text-5xl md:text-7xl tracking-tight">
              I am&nbsp;
              <br className="visible md:hidden" />
              <span className="text-blue-600">Farhan Bin Amin</span>.<br />I
              love creating beautiful
              <br />
              stuff for the web.
            </h1>
            <div>
              <HashLink smooth to="/#project">
                <button className="btn btn-blue">view my projects</button>
              </HashLink>
              <a href="mailto:farhanbinamin@gmail.com">
                <button className="btn btn-gray ml-0 sm:ml-12 mt-3 md:mt-0">
                  get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
