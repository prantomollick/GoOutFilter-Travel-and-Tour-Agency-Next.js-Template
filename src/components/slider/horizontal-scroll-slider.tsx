// Import Swiper React components
"use client";
import styles from "./horizontal-scroll-slider.module.scss";

import { useRef, useState } from "react";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import classNames from "classnames";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardDestination from "../card-destination/card-destination";
import ArrowBtn from "../ui/arrow-btn/arrow-btn";

export type SliderItem = {
  title: string;
  categories: string[];
  counts: number[];
  imgLink: string; // New field for image link
};

export type SliderData = {
  sliderData: SliderItem[];
};

const HorizontalScrollSlider: React.FC<SliderData> = ({ sliderData }) => {
  const [_, setInit] = useState<boolean>(); // Add a state for re-render
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles["slide-container"]}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          1290: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 40
          },

          900: {
            slidesPerView: 2.5,
            spaceBetween: 40
          },

          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },

          500: {
            slidesPerView: 1.8,
            spaceBetween: 0
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        scrollbar={{
          draggable: true,
          el: ".swiper-scrollbar",
          horizontalClass: "swiper-scrollbar-horizontal",
          dragClass: `${styles["slide-scroll-bar-control"]}`,
          dragSize: "auto"
        }}
        onInit={() => setInit(true)}
        style={{ overflow: "visible" }}
      >
        {sliderData.map((slide, i) => {
          return (
            <SwiperSlide key={slide.title}>
              <CardDestination
                imgLink={slide.imgLink}
                size="lg"
                title={slide.title}
                extraSmallText={`${slide.categories
                  .map((cat, i) => `${slide.counts[i]} ${cat}`)
                  .join(" - ")}`}
                className={styles.slide}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <div
          className={classNames("swiper-scrollbar", styles["slide-scroll-bar"])}
        ></div>
        <ArrowBtn
          direction="left"
          className={styles["slide-previous-btn"]}
          ref={prevRef}
        />
        <ArrowBtn
          direction="right"
          className={styles["slide-next-btn"]}
          ref={nextRef}
        />
      </div>
    </div>
  );
};

export default HorizontalScrollSlider;
