import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm NITHYASHREE</h1>
        <p className={styles.description}>
        I'm an <i>Artificial Intelligence and Data Science</i> student focused on solving real-world problems through technology. With a strong programming foundation, I aim to create impactful data-driven solutions.
        </p>
        <a href="mailto:nithyashreeeswaran@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
