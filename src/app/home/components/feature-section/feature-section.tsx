"use client";

import styles from "./feature-section.module.scss";

import Image from "next/image";
import React from "react";
import type { Features } from "../../page";
import { motion } from "framer-motion";
import classNames from "classnames";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 }
};

interface Props {
  features: Features[];
}

function FeatureSection({ features }: Props) {
  return (
    <section id="#feature" className={classNames(styles["section-feature"])}>
      <div className="container">
        <div className={styles.features}>
          {features.map((feature, i) => {
            return (
              <motion.div
                className={styles["feature"]}
                key={i}
                variants={variants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  width={70}
                  height={70}
                  priority={true}
                  src={feature.icon}
                  alt={feature.title}
                  className={styles["feature__icon"]}
                />
                <h3 className={styles["feature__title"]}>{feature.title}</h3>
                <p className={styles["feature__des"]}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
