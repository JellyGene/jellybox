import React from "react";
import Image from "next/image";
import { starCartoon } from "../fonts/fonts";

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
          <h3 className={`uppercase ${starCartoon.className}`}>{title}</h3>
        </header>
        <div className="drop-body small">{children}</div>
      </a>
      <div className="drop-image">
        <Image
          src={poster}
          width={698}
          height={468}
          alt={posterAlt ?? title}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkyD9aDwADYAG11MKejAAAAABJRU5ErkJggg=="
        />
      </div>
    </section>
  );
};

export default Drop;
