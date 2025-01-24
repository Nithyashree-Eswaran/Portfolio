import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Data Science Explorer</h3>
    <p>
      Skilled in analyzing data and creating insightful dashboards using Tableau 
      and Power BI to support data-driven decision-making.
    </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Artificial Intelligence Enthusiast</h3>
    <p>
      I am passionate about leveraging AI to develop innovative solutions, 
      including image recognition and predictive analytics.
    </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Software Developer</h3>
    <p>
      Proficient in programming languages like C, C++, Java, Python, and web 
      technologies including HTML and CSS for building robust applications.
    </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
