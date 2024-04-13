"use client";
import styles from "./inspiration-section.module.scss";

import Link from "next/link";
import { motion } from "framer-motion";

import CardBlog from "@/components/card-blog/card-blog";
import { blogData } from "@/data/blog-data";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 }
};

function InspirationSection() {
  return (
    <section id="#inspiration" className="py-12">
      <div className="container">
        <div className={styles["section-header"]}>
          <h2 className="s-heading">Get inspiration for your next trip</h2>
          <p className="s-heading-subtitle">Interdum et malesuada fames</p>
        </div>
        <div className={styles.blogs}>
          {blogData.map((blog, i) => (
            <motion.div
              key={blog.blogId}
              variants={variants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              className={styles["blog-wrapper"]}
              viewport={{ once: true }}
            >
              <Link href="#" className={styles.blog}>
                <CardBlog
                  date={blog.createdAt}
                  imgLink={blog.image}
                  title={blog.title}
                  size="md"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InspirationSection;
