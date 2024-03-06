"use client";
import styles from "./customer-review-section.module.scss";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "framer-motion";
import React, { useEffect, useRef } from "react";

function CustomerReviewSection() {
  const count = useMotionValue(0);
  const rounded = useTransform<number, number>(count, Math.round);
  const reviewCountRef = useRef<HTMLSpanElement>(null);
  const isReviewCountInView = useInView(reviewCountRef, { once: true });

  console.log(isReviewCountInView);

  useEffect(() => {
    if (isReviewCountInView) {
      const animation = animate(count, 13, {
        duration: 2
      });
      return () => animation.stop();
    }
  }, [count, isReviewCountInView]);

  return (
    <motion.section
      id="#customer-review"
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0, //slide in to its original position
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className={styles["customer-review"]}>
          <div>
            <div>
              <h3 className={styles["review-title"]}>
                What our customers are saying us?
              </h3>
              <p className={styles["review-des"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
            </div>
            <div>
              <motion.span
                className={styles["review-number"]}
                ref={reviewCountRef}
              >
                {rounded}
              </motion.span>
              m+
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default CustomerReviewSection;
