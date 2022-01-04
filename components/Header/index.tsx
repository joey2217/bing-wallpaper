import React, { memo } from "react";
import { Logo } from "../Icons";
import Link from "next/link";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/" >
        <a className={styles.logo}>
          {Logo}
          <h2 className={styles.title}>BingWallpaper</h2>
        </a>
      </Link>
      <Link href="/2021">
        <a className={styles.link}>2021</a>
      </Link>
    </header>
  );
};

export default memo(Header);
