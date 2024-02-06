import styles from "./card-destination.module.scss";

import Image from "next/image";
import React, { ReactNode } from "react";
import Button from "../ui/button/button";
import classNames from "classnames";

interface CardDestinationProps {
  imgLink: string;
  title: string;
  size: "xs" | "sm" | "md" | "lg";
  extraSmallText?: string;
}

function CardDestination({
  imgLink,
  title,
  size,
  extraSmallText
}: CardDestinationProps) {
  let cssClass: "card2-md" | "card2-sm" | "card2-xs" = "card2-md";
  let imgSize: { width: number; height: number } = { width: 300, height: 400 };

  switch (size) {
    case "md":
      cssClass = "card2-md";
      imgSize = { width: 224, height: 300 };
      break;
    case "sm":
      cssClass = "card2-sm";
      imgSize = { width: 190, height: 200 };
      break;

    case "xs":
      cssClass = "card2-xs";
      imgSize = { width: 160, height: 160 };
  }

  if (size === "lg") {
    return (
      <article className={styles.card}>
        <p className={styles.card__text}>
          14 Hotel - 22 Cars - 18 Tours - 95 Activity
        </p>
        <div className={styles["card__img-shadow"]}></div>
        <Image
          src={imgLink}
          alt={title}
          width={imgSize.width}
          height={imgSize.height}
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

  return (
    <article className={classNames(styles.card2, styles[cssClass])}>
      <Image
        src={imgLink}
        alt={title}
        width={imgSize.width}
        height={imgSize.height}
        className="card2__img"
        priority={true}
      />
      <div className={styles["card2__content"]}>
        <h3 className={styles["card2__content--title"]}>{title}</h3>
        <p className={styles["card2__content--extra-small-text"]}>
          {extraSmallText}
        </p>
      </div>
    </article>
  );
}

export default CardDestination;
