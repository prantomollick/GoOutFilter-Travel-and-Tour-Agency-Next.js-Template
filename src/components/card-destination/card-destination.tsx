import styles from "./card-destination.module.scss";

import Image from "next/image";
import React, { ReactNode } from "react";
import Button from "../ui/button/button";

interface CardDestinationProps {
  imgLink: string;
  title: string;
  size: "sm" | "md" | "lg" | "xl";
}

function CardDestination({ imgLink, title, size }: CardDestinationProps) {
  console.log(styles);

  if (size === "xl") {
    return (
      <article className={styles.card}>
        <p className={styles.card__text}>
          14 Hotel - 22 Cars - 18 Tours - 95 Activity
        </p>
        <div className={styles["card__img-shadow"]}></div>
        <Image
          src={imgLink}
          alt={title}
          width={300}
          height={400}
          priority={true}
          className={styles.card__img}
        />
        <h3 className={styles.card__title}>{title}</h3>
        <Button
          href="#"
          color="white"
          className={styles.card__button}
          radius="sm"
          fontWeight="medium"
        >
          Discover
        </Button>
      </article>
    );
  }

  return null;
}

export default CardDestination;
