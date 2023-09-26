import React from "react";

import Blob from "../content/blob";

const ServicesSection = () => {
  return (
    <>
      <div className="flx container">
        <Blob title="Services" idNum="service">
          Thanks to our{" "}
          <span className="highlight">unique production pipeline</span> and{" "}
          <span className="highlight">broad range of world-class talent</span>,
          we can provide{" "}
          <span className="highlight">all of these services</span> for your
          project:
        </Blob>
        <Blob title="Animation" idNum="animation-services"></Blob>
        <div>
          <Blob title="Design" idNum="design-services"></Blob>
          <Blob title="Storyboards" idNum="storyboards-services"></Blob>
        </div>
        <Blob title="Production" idNum="production-services"></Blob>
        <div>
          <Blob title="Music" idNum="music-services"></Blob>
          <Blob title="Sound Design" idNum="sound-services"></Blob>
        </div>
        <Blob title="Merch" idNum="merch-services"></Blob>
        <div>
          <Blob title="Editing" idNum="editing-services"></Blob>
          <Blob title="Post-Production" idNum="post-services"></Blob>
        </div>
      </div>
      <div className="jelly">
        <div className="jelly-side-left"></div>
        <div className="jelly-side-left"></div>
      </div>
    </>
  );
};

export default ServicesSection;
