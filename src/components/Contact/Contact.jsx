import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>💜Feel free to reach out!🖤</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nithyashreeeswaran@email.com">nithyashreeeswaran@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nithyashree-e-546535291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BOpcaVnc1R5iJIBeHY%2Bu9yg%3D%3D">linkedin.com/Nithyashree-Eswaran</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Nithyashree-Eswaran">github.com/Nithyashree-Eswaran</a>
        </li>
      </ul>
    </footer>
  );
};
