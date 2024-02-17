import styles from "./hero.module.scss";
import React from "react";

function Hero() {
  const navs = [
    "Hotel",
    "Tour",
    "Activity",
    "Holiday",
    "Rentals",
    "Car",
    "Cruise",
    "Flights"
  ];

  return (
    <section id="#hero" className={styles["hero-section"]} role="banner">
      <div className={styles["hero-wrapper"]}>
        <div className={styles["hero-text"]}>
          <h1 className={styles["hero-title"]}>Find Next Place To Visit</h1>
          <p className={styles["hero-subtitle"]}>
            Discover amzaing places at exclusive deals
          </p>
        </div>
        <div className={styles["searchNav"]}>
          <ul className={styles["searchNav__list"]}>
            {navs.map((nav) => (
              <li key={nav} className={styles["searchNav__item"]}>
                {nav}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
