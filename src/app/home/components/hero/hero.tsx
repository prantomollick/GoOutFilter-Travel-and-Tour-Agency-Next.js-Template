"use client";
import classNames from "classnames";
import SearchForm from "../search-form/search-form";
import styles from "./hero.module.scss";
import React, { useState } from "react";
type Nav = {
  label: string;
  isActive: boolean;
};

function Hero() {
  const [isNavActive, setIsNavActive] = useState({
    label: "Hotel",
    isActive: true
  });

  let navs: Nav[] = [
    { label: "Hotel", isActive: false },
    { label: "Tour", isActive: false },
    { label: "Activity", isActive: false },
    { label: "Holiday", isActive: false },
    { label: "Rentals", isActive: false },
    { label: "Car", isActive: false },
    { label: "Cruise", isActive: false },
    { label: "Flights", isActive: false }
  ];

  const handleClick = (nav: Nav) => {
    setIsNavActive(nav);
    navs = navs.map((navItem) =>
      navItem.label === nav.label
        ? { ...navItem, isActive: true }
        : { ...navItem, isActive: false }
    );
  };

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
              <li
                key={nav.label}
                className={classNames(
                  styles["searchNav__item"],
                  isNavActive.label === nav.label && "border-b-white"
                )}
                onClick={() => handleClick(nav)}
              >
                {nav.label}
              </li>
            ))}
          </ul>

          {isNavActive && <SearchForm />}
        </div>
      </div>
    </section>
  );
}

export default Hero;
