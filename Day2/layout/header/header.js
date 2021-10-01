import React from "react";
import Link from "next/Link";
import styles from "./header.module.css";

function header() {
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/registration">
              <a>Registration</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/form">
              <a>Form</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default header;
