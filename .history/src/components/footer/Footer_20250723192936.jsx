import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 ATUL PANDEY. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/linkdin.png" width={15} height={15} className={styles.icon} alt="Atul Linkdin Account" />
      </div>
    </div>
  );
};

export default Footer;
