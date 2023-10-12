import React from "react";
import styles from "./section.module.css";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`section ${styles.section} ${styles[className]}`}>
      <div className={styles["section-wrapper"]}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
