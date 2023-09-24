import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="flx spaced">
        <div className="flx flx-end menu-item-group">
          <Link className="menu-item menu-item-about" href="/about">
            About
          </Link>
          <Link className="menu-item menu-item-services" href="/services">
            Services
          </Link>
        </div>
        <div className="flx flx-start menu-item-group">
          <Link className="menu-item menu-item-work" href="/work">
            Work
          </Link>
          <Link className="menu-item menu-item-contact" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
