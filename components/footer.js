import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import styles from "./sections/section.module.css";

const socialGroup = [
  {
    social: "twitter",
    link: "https://twitter.com/Jellybox_Studio",
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/jellybox_studio/",
  },
  {
    social: "youtube",
    link: "https://www.youtube.com/@genegoldstein",
  },
  {
    social: "discord",
    link: "https://discord.gg/qJEejd2Hna",
  },
  {
    social: "tiktok",
    link: "https://www.tiktok.com/@jellybox_studio",
  },
];

const SocialList = () => {
  return (
    <ul>
      {socialGroup.map((object, index) => {
        return (
          <li key={index}>
            <a title={`link to ${object.social}`} href={object.link}>
              <Image
                alt={object.social}
                width={65}
                height={65}
                src={`/socials/${object.social}.png`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Footer = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <footer
      ref={ref}
      className={`section ${styles.section} ${styles["section-footer"]} fp-auto-height`}
    >
      <div
        className={`foot-wrapper flx column center ${inView ? "loaded" : ""}`}
      >
        <SocialList />
        <div>
          <span className="uppercase legal">&copy; Jellybox 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
