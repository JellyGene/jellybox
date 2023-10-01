import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="flx center">
        <Link className="menu-item menu-item-about" href="/about">
          <span className="text-hide">About</span>
        </Link>
        <Link className="menu-item menu-item-services" href="/services">
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
        <Link className="menu-item menu-item-work" href="/work">
          <span className="text-hide">Work</span>
        </Link>
        <Link className="menu-item menu-item-contact" href="/contact">
          <span className="text-hide">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
