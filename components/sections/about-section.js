// pages/about.js (About page)
import React from "react";
import Image from "next/image";
import Blob from "../content/blob";

const AboutSection = () => {
  return (
    <div className="flx">
      <div className="flx-col">
        <Image
          src="/green-bean.png"
          width={400}
          height={470}
          alt="President Bean"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkyD9aDwADYAG11MKejAAAAABJRU5ErkJggg=="
          unoptimized
        />
        <Blob title="Gene Goldstein" idNum="pres-bean">
          <span className="highlight uppercase">President Bean</span>
        </Blob>
      </div>
      <div className="flx-col">
        <Blob title="A Cute Lil' Animation Studio" idNum="about">
          <p>
            A one-stop shop for all
            <br />
            your animation needs!
          </p>
          <p>
            We&apos;ve got over 20 years of experience, and we would absolutely
            love to help you bring your ideas to life!
          </p>
        </Blob>
        <Blob idNum="about-2">
          <p>
            Our specialty is creating top-notch short-form animated content for
            online platforms like Instagram, TikTok and YouTube.
          </p>
          <p>
            Whether you&apos;ve already got an established audience, or if you
            have an original idea and want to expand your fanbase, we&apos;ll
            help you create a consistent pipeline of amazing animated shorts!
          </p>
        </Blob>
      </div>
    </div>
  );
};

export default AboutSection;
