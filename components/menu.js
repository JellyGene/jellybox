import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu = () => {
  const slideToItem = (e, section) => {
    e.preventDefault();
    fullpage_api.moveTo(section, 0);
  };
  return (
    <nav className={styles.menu}>
      <div className="flx center">
        <Link
          href="/about"
          className={`${styles["menu-item"]} ${styles["menu-item-about"]}`}
          onClick={(e) => slideToItem(e, 2)}
        >
          <span className="text-hide">About</span>
        </Link>
        <Link
          className={`${styles["menu-item"]} ${styles["menu-item-services"]}`}
          href="/services"
          onClick={(e) => slideToItem(e, 3)}
        >
          <span className="text-hide">Services</span>
        </Link>
        <div className={styles.title}>
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
          className={`${styles["menu-item"]} ${styles["menu-item-work"]}`}
          href="/work"
          onClick={(e) => slideToItem(e, 4)}
        >
          <span className="text-hide">Work</span>
        </Link>
        <Link
          className={`${styles["menu-item"]} ${styles["menu-item-contact"]}`}
          href="/contact"
          onClick={(e) => slideToItem(e, 5)}
        >
          <span className="text-hide">Contact</span>
        </Link>
        <Link
          className={`${styles["menu-item"]} ${styles["menu-item-shop"]}`}
          href="https://jellybox.bigcartel.com/"
        >
          <span className="text-hide">Shop</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
