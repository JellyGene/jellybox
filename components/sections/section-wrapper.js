import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./section.module.css";

const SectionWrapper = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`section fp-auto-height ${styles.section} ${styles[className]}`}
    >
      <div className={`${styles["section-wrapper"]} ${inView ? "loaded" : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
