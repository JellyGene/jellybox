import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { gsap, Sine } from "gsap";

const JellyWaves = () => {
  const waveId = nanoid(5);

  useEffect(() => {
    gsap.to(`#wave-${waveId}`, 2, {
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
          id={`wave-${waveId}`}
          style={{ fill: "#79ff91" }}
        ></path>
      </svg>
    </div>
  );
};

export default JellyWaves;
