import React, { useEffect } from "react";
import { gsap, Sine } from "gsap";

const HomeSection = () => {
  useEffect(() => {
    gsap.to(".wave2", 2, {
      attr: {
        d: "M0 120 Q360 60 720 120 T 1440 120 V240 H0 Z",
      },
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="flx align-bottom">
      <svg
        style={{ width: "100vw", height: "50px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="240"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z"
          className="wave2"
          style={{ fill: "#79ff91" }}
        ></path>
      </svg>
    </div>
  );
};

export default HomeSection;
