import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './layouts.module.css';
import App from '../components/antd/antd';


function Layouts(props) {
  return (
    <div className={styles.container}>
      <Header />
      <App/>
      <Footer />

    </div>
  );
}

export default Layouts;
