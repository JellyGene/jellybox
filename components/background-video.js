import React from "react";
import Cover from "react-video-cover";

const BackgroundVideo = ({ video }) => {
  const videoStyle = {
    objectPosition: "50% 50%",
    transition: "500ms all ease",
  };

  const videoOptions = {
    src: video,
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
  };

  return (
    <div className="bgv-wrapper">
      <Cover style={videoStyle} videoOptions={videoOptions} />
    </div>
  );
};

export default BackgroundVideo;
