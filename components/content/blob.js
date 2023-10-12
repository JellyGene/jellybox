import React from "react";
import styles from "./blob.module.css";

const Title = ({ title }) => {
  if (title) {
    return <h3 className="text-hide">{title}</h3>;
  }

  return null;
};

const Blob = ({ children, className, idNum, title }) => {
  return (
    <div
      className={`
        ${styles.blob}
        ${styles[`blob-${idNum ?? "normal"}`]}
        ${className ? " " + className : ""}
      `}
    >
      <Title />
      {children}
    </div>
  );
};

export default Blob;
