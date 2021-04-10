import React from "react";
import rockon from "assets/emojis/rockon.png";

export default function Footer() {
  return (
    <div>
      <p className="font-secondary text-gray-500 text-xs md:text-sm leading-normal text-center mb-2 mt-0 md:-mt-2 tracking-tight">
        <a
          href="https://github.com/farhan2077"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & built by
          <br />
          <div className="capitalize">
            <div className="text-center">
              <span className="mr-0.5">Farhan Bin Amin</span>
              <span>
                <img src={rockon} alt="hech yeah!" className="inline w-5 h-5" />
              </span>
              <span className="ml-0.5">2021</span>
            </div>
          </div>
        </a>
      </p>
    </div>
  );
}
