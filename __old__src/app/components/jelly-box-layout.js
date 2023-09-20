"use client";

import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const JellyBoxLayout = ({ children }) => {
  useEffect(() => {
    new fullpage('#fullpage', {
      navigation: true, // Add navigation dots to the bottom
      //licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    });
  }, []);

  return (
    <div id="fullpage">
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {children}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default JellyBoxLayout;