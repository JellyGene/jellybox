import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const slideToItem = (e, section) => {
    e.preventDefault();
    fullpage_api.moveTo(section, 0);
  };
  return (
    <nav className="menu">
      <div className="flx center">
        <Link
          href="/about"
          className="menu-item menu-item-about"
          onClick={(e) => slideToItem(e, 2)}
        >
          <span className="text-hide">About</span>
        </Link>
        <Link
          className="menu-item menu-item-services"
          href="/services"
          onClick={(e) => slideToItem(e, 3)}
        >
          <span className="text-hide">Services</span>
        </Link>
        <div className="title">
          <h1 className="text-hide">Jellybox</h1>
          <Image
            src="/logo-loop.png"
            width={200}
            height={200}
            alt="Jellybox"
            priority
            unoptimized
          />
        </div>
        <Link
          className="menu-item menu-item-work"
          href="/work"
          onClick={(e) => slideToItem(e, 4)}
        >
          <span className="text-hide">Work</span>
        </Link>
        <Link
          className="menu-item menu-item-contact"
          href="/contact"
          onClick={(e) => slideToItem(e, 5)}
        >
          <span className="text-hide">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
