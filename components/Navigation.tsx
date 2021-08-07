import Link from 'next/link';
import React from 'react';
import styles from '../styles/navigation.module.css';

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <Link href="/work">
        <a className={styles.item}>Work</a>
      </Link>
      <Link href="/projects">
        <a className={styles.item}>Projects</a>
      </Link>
      <Link href="/posts">
        <a className={styles.item}>Writing</a>
      </Link>
      <Link href="/about">
        <a className={styles.item}>About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
