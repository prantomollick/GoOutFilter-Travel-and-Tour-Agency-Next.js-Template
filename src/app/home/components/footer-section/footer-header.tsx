"use client";

import styles from "./footer-header.module.scss";

import Button from "@/components/ui/button/button";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

function FooterHeader() {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-darkest-blue">
      <div className="container">
        <div className={styles["subscription"]}>
          <div className={styles["subscription__content"]}>
            <div className={styles["subscription__content-img-wrapper"]}>
              <Image
                src="/icon/envelope-icon.svg"
                width={60}
                height={60}
                alt="envelope-icon"
                priority
                className={styles["subscription__content-img"]}
              />
            </div>
            <div>
              <h2 className={styles["subscription__content-title"]}>
                Your Travel Journey Starts Here
              </h2>
              <p className={styles["subscription__content-subtitle"]}>
                Sign up and we&#39;ll send the best deals to you
              </p>
            </div>
          </div>
          <div>
            <form
              action="#"
              onSubmit={handleSubscribe}
              className={styles["subscription__form"]}
            >
              <input
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className={styles["subscription__form-input"]}
              />
              <Button
                type="submit"
                color="blue"
                radius="sm"
                size="lg"
                className={styles["subscription__form-btn"]}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHeader;
