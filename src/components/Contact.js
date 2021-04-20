import React from "react";

export default function Contact() {
  return (
    <div>
      <span id="contact"></span>
      <h2 className="header">contact</h2>
      <section className="mt-6 md:mt-10 ml-0 md:ml-28 mr-0 md:mr-80 grid gap-y-4 text-primary">
        <p>
          Currently looking for opportunities where I can not only learn new
          skills by solving different types of problems but also apply what I
          know myself. Nevertheless, my inbox is always open.
        </p>
        <p>
          <a
            href="mailto:farhanbinamin@gmail.com"
            className="text-link underline-anim"
          >
            Say hi.
          </a>
        </p>
        <p>
          I am also on&nbsp;
          <a
            href="https://www.facebook.com/farhanbinamin1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            facebook
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://www.linkedin.com/in/farhan-bin-amin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            linkedin
          </a>
          .
        </p>
      </section>
    </div>
  );
}
