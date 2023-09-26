import React from "react";
import Image from "next/image";

const Drop = ({
  children,
  className,
  poster,
  posterAlt,
  idNum,
  title,
  link,
}) => {
  return (
    <section className={`drop drop-${idNum ?? "normal"} ${className}`}>
      <a className="drop-content" href={link}>
        <header className="drop-title">
          <h3>{title}</h3>
        </header>
        <div className="drop-body">{children}</div>
      </a>
      <div className="drop-image">
        <Image src={poster} width={698} height={468} alt={posterAlt ?? title} />
      </div>
    </section>
  );
};

export default Drop;
