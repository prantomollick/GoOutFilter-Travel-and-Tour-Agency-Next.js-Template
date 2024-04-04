"use client";

import styles from "./p-destination-section.module.scss";

import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";

import { useStickyNavigation } from "@/context/navigation-sticky-context";
import HorizontalScrollSlider, {
  type SliderItem
} from "@/components/slider/horizontal-scroll-slider";
import Button from "@/components/ui/button/button";
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
  const { onChangeSticky } = useStickyNavigation();

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -200px 0px"
  });

  useEffect(() => {
    if (isInView) {
      onChangeSticky(true);
    }
  }, [isInView, onChangeSticky]);

  return (
    <section className="pt-12 pb-12" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1
            }
          }}
        >
          <div className={styles["d-slider-section"]}>
            <div className={styles["section-head"]}>
              <div className={styles["section-title"]}>
                <h2 className="s-heading">Popular Destinations</h2>
                <p className="s-heading-subtitle">
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
                width={350}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PdestinationSection;
