import React from "react";

export default function Work() {
  return (
    <div>
      <span id="work"></span>
      <h2 className="header">working experience</h2>
      <section className="mt-6 ml-0 mr-0 md:mt-10 md:ml-28 md:mr-40 text-primary">
        <p className="font-bold tracking-tight md:font-semibold">
          Full Stack Web Developer Co-op
        </p>
        <p className="font-secondary tracking-tight">
          Jan 2021 - Jul 2021 // Dhaka, Bangladesh
        </p>
        <p className="mt-2">
          Worked remotely on a open source E-commerce web app "
          <a
            className="text-link underline-anim"
            href="https://github.com/alamin02/pluto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pluto
          </a>
          ". Helped build both frontend and backend in a monorepo.
        </p>
      </section>
    </div>
  );
}
