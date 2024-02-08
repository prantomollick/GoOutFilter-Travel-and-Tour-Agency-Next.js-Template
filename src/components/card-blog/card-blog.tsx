import styles from "./card-blog.module.scss";
import { formatDate } from "@/util/formatDate";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type PhotoRatio = {
  width: number;
  height: number;
};

interface CardBlogProps {
  imgLink: string;
  title: string;
  size?: "sm" | "md" | "lg";
  shadow?: "none" | "shadow-subtle" | "shadow-soft";
  date: Date;
  extraSmallText?: string;
}

type ImgSize = {
  sm: PhotoRatio;
  md: PhotoRatio;
  lg: PhotoRatio;
};

function CardBlog({
  imgLink,
  title,
  size = "lg",
  shadow = "none",
  date,
  extraSmallText
}: CardBlogProps) {
  //Define imgSize based on the size prop
  const imgSize: ImgSize = {
    sm: { width: 300, height: 280 },
    md: { width: 410, height: 320 },
    lg: { width: 250, height: 250 }
  };

  const { width, height } = imgSize[size];

  return (
    <article className={classNames(styles[`card-${size}`], shadow)}>
      <div className={styles["card__img-wrapper"]}>
        <Image
          src={imgLink}
          alt={title}
          //   layout="responsive"
          priority={true}
          width={width}
          height={height}
        />
      </div>
      <div
        className={classNames(
          styles["card__content"],
          shadow !== "none" && "py-2 pb-2"
        )}
      >
        {size === "lg" && (
          <p className={styles["card__content--date"]}>{formatDate(date)}</p>
        )}
        <h3 className={styles["card__content--heading"]}>{title}</h3>
        {extraSmallText && (
          <p className={styles["card__content--desc"]}>{extraSmallText}</p>
        )}
        {size !== "lg" && (
          <p className={styles["card__content--date"]}>{formatDate(date)}</p>
        )}
      </div>
    </article>
  );
}

export default CardBlog;
