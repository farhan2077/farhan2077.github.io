import React from "react";

export default function About() {
  return (
    <div>
      <span id="about"></span>
      <h2 className="header">about</h2>
      <section className="grid mt-6 ml-0 mr-0 md:mt-10 md:ml-28 md:mr-40 gap-y-4 text-primary">
        <p>Hi! I’m from Khulna, Bangladesh.</p>
        <p>
          I have completed my graduation in
          <span className="font-semibold">
            &nbsp;Electronics & Communication Engineering&nbsp;
          </span>
          from&nbsp;
          <a
            className="text-link underline-anim"
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
          I love taking pictures and sometimes upload them to&nbsp;
          <a
            className="text-link underline-anim"
            href="https://www.instagram.com/farhan.bin.amin_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          . Also, whenever I am not studying or working, I’m probably listening
          to The Weeknd or watching movies or tv-shows.
        </p>
      </section>
    </div>
  );
}
