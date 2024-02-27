import styles from "./p-destination-section.module.scss";

import HorizontalScrollSlider, {
  type SliderItem
} from "@/components/slider/horizontal-scroll-slider";
import Button from "@/components/ui/button/button";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import DestinationBanner from "./destination-banner";

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

type BannerItem = {
  title: string;
  btnText: string;
  imgLink: string;
  captionText?: string;
};

const bannerData: BannerItem[] = [
  {
    title: "Things to do on your trip",
    btnText: "Experinces",
    imgLink: "/destination/d-banner-1.jpg"
  },
  {
    title: "Up to 70% Discount!",
    btnText: "Learn More",
    captionText: "Enjoy Summer Deals",
    imgLink: "/destination/d-banner-2.jpg"
  }
];

function PdestinationSection() {
  return (
    <section className="pt-12">
      <div className="container">
        <div className={styles["d-slider-section"]}>
          <div className={styles["section-head"]}>
            <div className={styles["section-title"]}>
              <h2 className="s-heading">Popular Destinations</h2>
              <p className="s-heading-p">
                These popular destinations have a lot to offer
              </p>
            </div>
            <Button
              size="lg"
              radius="sm"
              endicon={<GoArrowUpRight size={20} />}
            >
              View All Destinations
            </Button>
          </div>
          <HorizontalScrollSlider sliderData={sliderData} />
        </div>
        <div className={styles["d-banner"]}>
          {bannerData.map((banner) => (
            <DestinationBanner
              key={banner.title}
              title={banner.title}
              imgLink={banner.imgLink}
              btnText={banner.btnText}
              captionText={banner.captionText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PdestinationSection;
