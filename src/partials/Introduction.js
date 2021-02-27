import React from "react";

export default function Introduction() {
  return (
    <>
      <main className="-mt-16 h-screen">
        <div className="flex items-center h-full">
          <div className="font-primary">
            <p className="text-gray-600 text-xl">👋 there!</p>
            <h1 className="my-20 text-gray-600 font-bold text-7xl">
              I am <span className="text-blue-600">Farhan Bin Amin</span>.<br/>I love creating beautiful<br/>stuff for the web.
            </h1>
            <div>
              <button className="btn btn-blue">view my projects</button>
              <button className="btn btn-gray ml-12">get in touch</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
