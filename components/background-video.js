import React from "react";
import Cover from "react-video-cover";

const BackgroundVideo = ({ video }) => {
  const bgContainerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

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
    <div>
      <div style={bgContainerStyle}>
        <Cover style={videoStyle} videoOptions={videoOptions} />
      </div>
    </div>
  );
};

export default BackgroundVideo;
