"use client";
import styles from "./recommend-section.module.scss";

import { navigationMenu } from "@/app/navigation-menu";

import React, { useMemo } from "react";
import { hotels } from "@/data/hotel-data";
import CardMdHotel from "@/components/card-hotel/card-md-hotel";
import Link from "next/link";

function RecommendSection() {
  const categories = navigationMenu
    .filter((menuLabel) => {
      if (menuLabel.label.toLowerCase() === "categories") {
        return menuLabel.subnav;
      }
    })[0]
    .subnav?.map((cat) => cat.label);

  console.log(categories);

  return (
    <section id="#recommend">
      <div className="container">
        <div className={styles["section__header"]}>
          <div>
            <h2 className={styles["recommend__heading"]}>Recommended</h2>
            <p className={styles["recommend__heading-subtitle"]}>
              Interdum et malesuada fames ac ante ipsum
            </p>
          </div>

          <div>
            <select>
              {categories?.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {hotels.map((hotel) => {
            if (hotel.isRecommend) {
              return (
                <Link key={hotel.hotelId} href={"#"}>
                  <CardMdHotel
                    images={hotel.images! as string[]}
                    isFavourite={hotel.isFavourite}
                    location={hotel.location}
                    rating={hotel.rating}
                    room={hotel.room}
                    totalReviews={hotel.totalReviews}
                    badge={hotel.badge}
                    name={hotel.name}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default RecommendSection;
