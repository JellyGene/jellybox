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
      <ReactFullpage
        navigation={true}
        licenseKey="gplv3-license"
        scrollingSpee={800}
        afterLoad={(origin, destination, direction, trigger) => {
          const destinationIndex = destination.index;
          const pages = ["/", "/about", "/services", "/work", "/contact"];

          if (
            router.pathname !== "/" &&
            origin.index === destinationIndex
          ) {
            const incomingSection = pages.findIndex(
              (item) => item === router.pathname
            );

            window.fullpage_api.silentMoveTo(incomingSection + 1, 0);
          } else if (origin.index !== pages[destinationIndex]) {
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
