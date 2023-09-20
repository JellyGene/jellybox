import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="menu">
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/work">Work</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Menu;