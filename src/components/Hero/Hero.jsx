import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prathvish</h1>
        <p className={styles.description}>
          I am a final-year B.Tech student in Computer Science and Engineering,
          passionate about exploring and working with the latest technologies. I
          am constantly driven to learn and apply new skills to solve real-world
          challenges.
        </p>
        <a
          href="mailto:prathvishprakash@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
