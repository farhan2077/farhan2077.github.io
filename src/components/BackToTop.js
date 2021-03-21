import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { debounce } from "../utils/debounce";
import pointingUp from "../assets/emojis/pointing-up.png";

export default function BackToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [animateToTop, setAnimateToTop] = useState("false");

  const animateEmoji = animateToTop ? "fadein" : "fadeout";

  const handleScroll = debounce(() => {
    if (window.scrollY > 400) {
      setShowScrollToTop(true);
      setAnimateToTop(true);
    } else {
      setShowScrollToTop(false);
      setAnimateToTop(false);
    }
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => window.removeEventListener("scroll, touchmove", handleScroll);
  }, [handleScroll]);

  const showToTopEmoji = showScrollToTop ? "visible" : "invisible";

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-0 right-0 mr-6 sm:mr-4 mb-6 sm:mb-8">
      <Link to="/" onClick={scrollToTop}>
        <img
          src={pointingUp}
          alt="Go to top"
          className={`w-10 h-auto ${showToTopEmoji} ${animateEmoji}`}
        />
      </Link>
    </div>
  );
}
