import React from "react";
import Wave from "react-wavify";

const JellyWaves = () => {
  return (
    <div className="flx align-bottom">
      <Wave
        fill="rgb(121, 255, 145)"
        paused={false}
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
        className="wave"
        options={{
          height: 10,
          amplitude: 15,
          speed: 0.15,
          points: 6,
        }}
      />
    </div>
  );
};

export default JellyWaves;
