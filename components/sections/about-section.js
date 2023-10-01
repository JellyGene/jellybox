// pages/about.js (About page)
import React from "react";
import Image from "next/image";
import Blob from "../content/blob";

const AboutSection = () => {
  return (
    <>
      <div className="flx center container">
        <div className="flx-col flx column center flx-m-row">
          <Image
            src="/green-bean.png"
            className="bean"
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
            <p className="large">
              A <span className="highlight">one-stop shop</span> for all
              <br />
              your animation needs!
            </p>
            <p>
              We&apos;ve got over <span className="highlight">20 years of experience</span>,<br />and we would absolutely <span className="highlight">love</span> to help you<br /><span className="highlight">bring your ideas to life!</span>
            </p>
          </Blob>
          <Blob idNum="about-2">
            <p>
              Our specialty is creating top-notch<br />short-form animated content
              for online<br />platforms like <span className="highlight">Instagram</span>, <span className="highlight">TikTok</span> and <span className="highlight">YouTube</span>.
            </p>
            <p>
              Whether you&apos;ve already<br />got an <span className="highlight">established audience</span>, or if you have an<br />original idea and want to <span className="highlight">expand your fanbase</span>,<br />we&apos;ll help you create a consistent pipeline of<br /><span className="highlight">amazing animated shorts!</span>
            </p>
          </Blob>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
