import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";

import BackgroundVideo from "./background-video";
import { starCartoon, candyBean } from "./fonts/fonts";

function JellyBoxLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(true);
    }
  }, []);

  const addLoadedClass = (destination) => {
    if (!destination.item.classList.contains("loaded")) {
      destination.item.classList.add("loaded");
    }
  };

  return (
    <article className={candyBean.className}>
      <ReactFullpage
        licenseKey="gplv3-license"
        scrollingSpeed={950}
        css3={true}
        scrollBar={true}
        autoScrolling={false}
        fitToSection={false}
        easingcss3="ease-in"
        sectionsColor={[
          "transparent",
          "#35fb58",
          "#35fb58",
          "#35fb58",
          "#35fb58",
          "#35fb58",
        ]}
        credits={{ enabled: false }}
        afterLoad={(origin, destination, direction, trigger) => {
          const destinationIndex = destination.index;
          const pages = ["/", "/about", "/services", "/work", "/contact"];

          if (destinationIndex !== -1) {
            if (router.pathname !== "/" && origin.index === destinationIndex) {
              console.log({ origin, destination });
              console.log("======");
              const incomingSection = pages.findIndex(
                (item) => item === router.pathname
              );

              window.fullpage_api.silentMoveTo(incomingSection + 1);
            } else if (origin.index !== pages[destinationIndex]) {
              window.history.pushState(null, null, pages[destinationIndex]);
              addLoadedClass(destination);
            }
          } else if (destinationIndex === -1 || router.pathname === "/") {
            addLoadedClass(destination);
          }
        }}
        render={({ state, fullpageApi }) => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
      <BackgroundVideo video="/JellyboxReel2023.mp4" />
    </article>
  );
}

export default JellyBoxLayout;
