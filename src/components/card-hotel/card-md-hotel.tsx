"use client";
import styles from "./card-hotel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GoogleLocation, Rating, Room } from "@/data/hotel-data";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { formattedPrice } from "@/util/formatPrice";

import { SwiperImageSlide } from "./swiper-image-slide";

interface CardHotelProps {
  name: string;
  isFavourite: boolean;
  location: GoogleLocation;
  rating: Rating;
  room: Room;
  badge?: string;
  totalReviews: number;
  images: string[];
}

function CardMdHotel({
  name,
  isFavourite,
  location,
  rating,
  images,
  badge,
  room,
  totalReviews,
  ...props
}: CardHotelProps) {
  return (
    <article className={styles["hcard-md"]}>
      <div className={styles["hcard-header"]}>
        <SwiperImageSlide images={images} title={name} />
        <span className={styles["hcard-badge"]}>Breakfast included</span>
        <button className={styles["hcard-reaction-btn"]}>
          {isFavourite ? <GoHeart /> : <GoHeartFill />}
        </button>
      </div>

      <div className={styles["hcard-content"]}>
        <h3 className={styles["hcard-name"]}>{name}</h3>
        <p className={styles["hcard-location"]}>{location.address}</p>
        <div>
          <button>{rating.score}</button>
          <span> {rating.type}</span>
          <span>{totalReviews} reviews</span>
        </div>
        <p className={"hcard-price"}>
          Starting from&nbsp;
          <span className="hcard-amount">
            {room.price.currency}
            {formattedPrice(room.price.amount, room.price.currency)}
          </span>
          / night
        </p>
      </div>
    </article>
  );
}

export default CardMdHotel;
