import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="flx center">
        <Link className="menu-item menu-item-about" href="/about">
          <span class="text-hide">About</span>
        </Link>
        <Link className="menu-item menu-item-services" href="/services">
          <span class="text-hide">Services</span>
        </Link>
        <div className="title">
          <h1 className="text-hide">JellyBox</h1>
          <Image src="/logo-loop.png" width={200} height={200} />
        </div>
        <Link className="menu-item menu-item-work" href="/work">
          <span class="text-hide">Work</span>
        </Link>
        <Link className="menu-item menu-item-contact" href="/contact">
          <span class="text-hide">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
