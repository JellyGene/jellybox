import React from "react";
import dynamic from "next/dynamic";
import Menu from "../menu";
const JellyWaves = dynamic(() => import("../jelly-waves"), {
  ssr: false,
});

const HomeSection = () => {
  return (
    <>
      <Menu />
      <JellyWaves />
    </>
    
  );
};

export default HomeSection;
