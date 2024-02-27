// Import Swiper React components
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import styles from "./slide.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import classNames from "classnames";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardDestination from "../card-destination/card-destination";
import ArrowBtn from "../ui/arrow-btn/arrow-btn";

type SliderItem = {
  title: string;
  categories: string[];
  counts: number[];
  imgLink: string; // New field for image link
};

const sliderData: SliderItem[] = [
  {
    title: "New York",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [14, 22, 18, 95],
    imgLink: "/destination/newyork.jpg"
  },
  {
    title: "London",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [27, 8, 42, 15],
    imgLink: "/destination/london.jpg"
  },
  {
    title: "Barcelona",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [5, 37, 12, 20],
    imgLink: "/destination/barcelona.jpg"
  },
  {
    title: "Sydney",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [48, 9, 33, 14],
    imgLink: "/destination/sydney.jpg"
  },
  {
    title: "Rome",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [19, 41, 6, 28],
    imgLink: "/destination/rome.jpg"
  },
  {
    title: "Paris",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [32, 18, 25, 22],
    imgLink: "/destination/paris.jpg"
  },
  {
    title: "Tokyo",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [15, 29, 21, 40],
    imgLink: "/destination/tokyo.jpg"
  },
  {
    title: "Dubai",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [40, 12, 30, 19],
    imgLink: "/destination/dubai.jpg"
  },
  {
    title: "San Francisco",
    categories: ["Hotel", "Cars", "Tours", "Activity"],
    counts: [10, 17, 35, 23],
    imgLink: "/destination/sanfrancisco.jpg"
  }
];

const Slider = () => {
  const [_, setInit] = useState<boolean>(); // Add a state for re-render
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles["slide-container"]}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        scrollbar={{
          draggable: true,
          el: ".swiper-scrollbar",
          horizontalClass: "swiper-scrollbar-horizontal",
          dragClass: `${styles["slide-scroll-bar-control"]}`,
          dragSize: 348
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

export default Slider;
