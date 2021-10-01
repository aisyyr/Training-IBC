import React from "react";
import styles from "../components/Blog/blog.module.css";
import Layout from "../layout/index.js";

function blog() {
  return (
    <div>
      <Layout>
        <h1 className={styles.title}>Halaman Blog</h1>
      </Layout>
    </div>
  );
}

export default blog;
