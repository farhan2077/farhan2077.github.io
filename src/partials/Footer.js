import React from "react";
import rockon from "../images/emojis/rockon.png";

export default function Footer() {
  return (
    <>
      <p className="font-secondary text-gray-500 text-xs md:text-sm leading-normal text-center mb-2 mt-0 md:-mt-2">
        <a href="https://github.com/farhan2077">
          Designed & built by
          <br />
          <div className="capitalize">
            <div className="text-center">
              <span className="mr-0.5">Farhan Bin Amin</span>
              <span>
                <img src={rockon} alt="hech yeah!" className="inline w-5 h-5"/>
              </span>
              <span className="ml-0.5">2021</span>
            </div>
          </div>
        </a>
      </p>
    </>
  );
}