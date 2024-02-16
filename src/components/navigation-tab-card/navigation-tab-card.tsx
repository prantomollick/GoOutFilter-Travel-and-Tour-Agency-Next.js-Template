import styles from "./navigation-tab-card.module.scss";
import Image from "next/image";
import React from "react";
import Button from "../ui/button/button";
import Link from "next/link";

interface NavigationTabCardProps {
  imgLink: string;
  imgSize?: {
    width: number;
    height: number;
  };
  title: string;
  btnText: string;
}

function NavigationTabCard({
  imgLink,
  title,
  btnText,
  imgSize
}: NavigationTabCardProps) {
  return (
    <article className={styles.navigation__card}>
      <div className={styles["navigation__card--overlay"]}></div>
      <Image
        width={imgSize?.width || 280}
        height={imgSize?.height || 300}
        alt={title}
        priority
        src={imgLink}
        className={styles["navigation__card--img"]}
      />

      <div className={styles["navigation__card--content"]}>
        <h3 className={styles["navigation__card--title"]}>{title}</h3>
        <Link href="/hotel" className={styles["navigation__card--btnLink"]}>
          {btnText}
        </Link>
      </div>
    </article>
  );
}

export default NavigationTabCard;
