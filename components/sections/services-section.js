import React from "react";

import Blob from "../content/blob";

const ServicesSection = () => {
  return (
    <>
      <div className="flx container wide center">
        <div className="m-100 flx center">
          <Blob title="Services" idNum="service" className="services">
            Thanks to our<br /><span className="highlight">unique production pipeline</span> and<br /><span className="highlight">broad range of world-class talent</span>,<br />we can provide <span className="highlight">all of these services</span><br /> for your
            project:
          </Blob>
        </div>
        <Blob title="Animation" idNum="animation-services" className="services">
          <span className="extra-large bold">Animation</span>
        </Blob>
        <div>
          <Blob title="Design" idNum="design-services" className="services">
            <span className="small">Design</span>
          </Blob>
          <Blob title="Storyboards" idNum="storyboards-services" className="services">
            <span className="small">Storyboards</span>
          </Blob>
        </div>
        <Blob title="Writing" idNum="writing-services" className="services">
          <span className="extra-large">Writing</span>
        </Blob>
        <Blob title="Production" idNum="production-services" className="services m-or1">
          <span className="extra-large">Production</span>
        </Blob>
        <div className="m-or0">
          <Blob title="Music" idNum="music-services" className="services">
            <span className="small">Music</span>
          </Blob>
          <Blob title="Sound Design" idNum="sound-services" className="services">
            <span className="small">Sound Design</span>
          </Blob>
        </div>
        <Blob title="Merch" idNum="merch-services" className="services m-or3">
          <span className="extra-large">Merch</span>
        </Blob>
        <div className="m-or2">
          <Blob title="Editing" idNum="editing-services" className="services">
            <span className="small">Editing</span>
          </Blob>
          <Blob title="Post-Production" idNum="post-services" className="services">
            <span className="small">Post-Production</span>
          </Blob>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
