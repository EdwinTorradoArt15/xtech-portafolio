"use client";

import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollThreshold = 200;
      setShowButton(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    const scrollToTop = () => {
      const scrollStep = -window.scrollY / 15;
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        setTimeout(scrollToTop, 5);
      }
    };

    scrollToTop();
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 p-4 bg-secondary text-white rounded-full border-2 border-transparent hover:bg-primary hover:text-secondary hover:border-secondary
          transition-all duration-300 ease-in-out 
          "
          onClick={handleButtonClick}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
