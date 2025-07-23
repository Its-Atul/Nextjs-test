import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 ATUL PANDEY. All rights reserved.</div>
      <div className={styles.social}>
       <a
          href="https://www.linkedin.com/in/atul-pandey-378a9322a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkdin.png"
            width={32}
            height={32}
            className={styles.icon}
            alt="Atul LinkedIn Account"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
