import React from "react";
import dynamic from "next/dynamic";
const JellyWaves = dynamic(() => import("../jelly-waves"), {
  ssr: false,
});

const HomeSection = () => {
  return <JellyWaves />;
};

export default HomeSection;
