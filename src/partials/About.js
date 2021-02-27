import React from "react";

export default function About() {
  return (
    <>
      <a href="#about" className="hidden">
        ignore this
      </a>
      <h2 className="header">about</h2>
      <section className="sectionSpacing">
        <p>
          Hello! I’m Farhan from Khulna.
          <br />
          Currently studying
          <span className="font-semibold tracking-tight">
            &nbsp;Electronics & Communication Engineering&nbsp;
          </span>
          at&nbsp;
          <a
            className="text-link"
            href="https://ku.ac.bd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khulna University
          </a>
          .
        </p>
        <p>
          I enjoy creating things for the internet whether that be a website or
          an application or anything in between which is not only functional but
          also beautiful bringing elegant experience.
        </p>
        <p>
          Whenever I am not studying or working, I’m probably watching movies or
          tv-shows.
        </p>
      </section>
    </>
  );
}
