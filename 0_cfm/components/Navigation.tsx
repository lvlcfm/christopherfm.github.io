import Link from 'next/link';
import React from 'react';
import styles from '../styles/navigation.module.css';

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <Link href="/work">
        <a className={styles.item}>work</a>
      </Link>
      <Link href="/projects">
        <a className={styles.item}>projects</a>
      </Link>
      <Link href="/posts">
        <a className={styles.item}>writing</a>
      </Link>
      <Link href="/about">
        <a className={styles.item}>about</a>
      </Link>
    </nav>
  );
};

export default Navigation;
