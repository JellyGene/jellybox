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
    link: "https://www.youtube.com/@JellyboxStudio",
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

const SocialList = ({ socials }) => {
  return (
    <ul>
      {socials.map((social) => {
        return (
          <li key={social.sys.id}>
            <a
              title={`link to ${social.fields.title}`}
              href={social.fields.link}
            >
              <Image
                alt={social.fields.title}
                width={65}
                height={65}
                src={`https:${social.fields.image.fields.file.url}`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Footer = ({ socials }) => {
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
        <SocialList socials={socials} />
        <div>
          <span className="uppercase legal">&copy; Jellybox 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
