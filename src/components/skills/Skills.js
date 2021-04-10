import React from "react";

import { languages, frameworks, tools, design } from "./skillsInfo";

export default function Skills() {
  return (
    <div>
      <h2 className="header">skills</h2>
      <section className="mt-6 md:mt-10 ml-0 md:ml-28 text-primary grid gap-y-3 md:gap-y-1.5">
        {/* language */}
        <div className="flex flex-col md:flex-row gap-x-16 capitalize">
          <div className="w-28 font-bold md:font-semibold tracking-tight">
            languages:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10">
            {languages.map((item) => (
              <div key={item.id} className="w-40">
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* frameworks */}
        <div className="flex flex-col md:flex-row gap-x-16 capitalize">
          <div className="w-28 font-bold md:font-semibold tracking-tight">
            frameworks:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10">
            {frameworks.map((item) => (
              <div key={item.id} className="w-40">
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* tools */}
        <div className="flex flex-col md:flex-row gap-x-16 capitalize">
          <div className="w-28 font-bold md:font-semibold tracking-tight">
            tools:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10">
            {tools.map((item) => (
              <div key={item.id} className="w-40">
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* design */}
        <div className="flex flex-col md:flex-row gap-x-16 capitalize">
          <div className="w-28 font-bold md:font-semibold tracking-tight">
            design:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10">
            {design.map((item) => (
              <div key={item.id} className="w-40">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
