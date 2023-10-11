import React from "react";
import { nanoid } from "nanoid";
import Wave from "react-wavify";

const JellyWaves = () => {
  const waveId = nanoid(5);

  return (
    <div className="flx align-bottom">
      <Wave
        fill="rgb(121, 255, 145)"
        paused={false}
        style={{ display: "flex", width: "100vw", height: "65px" }}
        options={{
          height: 20,
          amplitude: 35,
          speed: 0.15,
          points: 6,
        }}
      />
    </div>
  );
};

export default JellyWaves;
