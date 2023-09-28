import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";
import VideoBg from "reactjs-videobg";

import Menu from "./menu";
import { starCartoon, candyBean } from "./fonts/fonts";

function JellyBoxLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(true);
    }
  }, []);

  return (
    <article className={candyBean.className}>
      <Menu />
      <ReactFullpage
        navigation={true}
        licenseKey="gplv3-license"
        scrollingSpee={800}
        afterLoad={(origin, destination, direction, trigger) => {
          console.log("Render Section");
          const destinationIndex = destination.index;
          const pages = ["/", "/about", "/services", "/work", "/contact"];

          console.log(destinationIndex)

          if (
            router.pathname !== pages[destinationIndex] &&
            origin.index === destinationIndex
          ) {
            const incomingSection = pages.findIndex(
              (item) => item === router.pathname
            );
            console.log("same page: ", {
              incomingSection,
              active: fullpage_api.getActiveSection(),
            });
            window.fullpage_api.silentMoveTo(incomingSection + 1, 0);
          } else if (router.pathname !== pages[destinationIndex]) {
            console.log('change')
            window.history.pushState(null, null, pages[destinationIndex]);
          }
        }}
        render={({ state, fullpageApi }) => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
      <VideoBg wrapperClass="reel-wrapper" videoClass="reel">
        <VideoBg.Source src="/JellyboxReel2023.webm" type="video/webm" />
        <VideoBg.Source src="/JellyboxReel2023.mp4" type="video/mp4" />
      </VideoBg>
    </article>
  );
}

export default JellyBoxLayout;
