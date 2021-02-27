import React from "react";

export default function Introduction() {
  return (
    <>
      <main className="-mt-32 md:-mt-16 h-screen">
        <div className="flex items-center h-full">
          <div className="font-primary">
            <p className="text-gray-600 text-xl">👋 there!</p>
            <h1 className="my-16 md:my-20 text-gray-600 font-bold text-5xl md:text-7xl tracking-tight">
              I am&nbsp;<br className="visible md:hidden" /><span className="text-blue-600">Farhan Bin Amin</span>.<br/>I love creating beautiful<br/>stuff for the web.
            </h1>
            <div>
              <button className="btn btn-blue">view my projects</button>
              <button className="btn btn-gray ml-0 sm:ml-12 mt-3 md:mt-0">get in touch</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
