import styles from "./card-blog.module.scss";
import { formatDate } from "@/util/formatDate";
import React from "react";

type PhotoRatio = {
  width: number;
  height: number;
};

interface CardBlogProps {
  imgLink: string;
  title: string;
  size?: "sm" | "md" | "lg";
  variant?: "shadow";
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
  variant,
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
    <article className={styles[`card-${size}`]}>{formatDate(date)}</article>
  );
}

export default CardBlog;
