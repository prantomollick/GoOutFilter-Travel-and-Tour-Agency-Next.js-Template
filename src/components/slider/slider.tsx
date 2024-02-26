import styles from "./slide.module.scss";
import React, { useState } from "react";
import CardDestination from "../card-destination/card-destination";
import ArrowBtn from "../ui/arrow-btn/arrow-btn";

// Define a type for each item in the SliderData array
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

const totalSlide = sliderData.length;
const currentPreview = 4;
const controlCount = totalSlide - currentPreview;
const slideControlBarCount = controlCount + 1;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);

    if (currentSlide * -1 < controlCount) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handlePrev = () => {
    // setCurrentSlide(
    //   (prevSlide) => (prevSlide - 1 + images.length) % images.length
    // );

    console.log(currentSlide);

    if (currentSlide < 0) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <div className={styles["slide-container"]}>
      <ArrowBtn
        direction="left"
        className={styles["slide-previous-btn"]}
        onClick={handlePrev}
      />

      <div
        className={styles.slides}
        style={{ marginLeft: `${currentSlide * 30}px` }}
      >
        {sliderData.map((slide, i) => {
          return (
            <CardDestination
              imgLink={slide.imgLink}
              size="lg"
              title={slide.title}
              extraSmallText={`${slide.categories
                .map((cat, i) => `${slide.counts[i]} ${cat}`)
                .join(" - ")}`}
              key={slide.title}
              className={styles.slide}
              style={{
                transform: `translateX(${100 * currentSlide}%)`
              }}
            />
          );
        })}
      </div>

      <ArrowBtn
        direction="right"
        className={styles["slide-next-btn"]}
        onClick={handleNext}
      />

      <div className={styles["slide-control"]}>
        <div
          className={styles["slide-control-bar"]}
          style={{
            width: `${100 / slideControlBarCount}%`,
            transform: `translateX(${100 * currentSlide * -1}%)`
          }}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
