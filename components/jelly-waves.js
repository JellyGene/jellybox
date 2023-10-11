import React from "react";
import Wave from "react-wavify";

const JellyWaves = () => {
  return (
    <div className="flx align-bottom">
      <Wave
        fill="rgb(121, 255, 145)"
        paused={false}
        style={{ display: "flex", width: "100vw", height: "65px" }}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.15,
          points: 6,
        }}
      />
    </div>
  );
};

export default JellyWaves;
