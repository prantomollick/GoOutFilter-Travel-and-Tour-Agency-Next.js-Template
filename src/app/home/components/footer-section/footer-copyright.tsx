import classNames from "classnames";
import styles from "./footer-copyright.module.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa6";

function FooterCopyright() {
  return (
    <div className="container">
      <div className={classNames(styles["f-copyright"], "py-2")}>
        <div className={styles["f-copyright__left"]}>
          <p className={styles["f-copyright__left-text"]}>
            © {new Date().getFullYear()} GoTrip LLC All rights reserved.
          </p>
          <ul className={styles["f-copyright__left-list"]}>
            <li className={styles["f-copyright__left-list-item"]}>
              <Link href="#" className={styles["f-copyright__left-link"]}>
                Privacy
              </Link>
            </li>
            <li className={styles["f-copyright__left-list-item"]}>
              <Link href="#" className={styles["f-copyright__left-link"]}>
                Terms
              </Link>
            </li>
            <li className={styles["f-copyright__left-list-item"]}>
              <Link href="#" className={styles["f-copyright__left-link"]}>
                Site Map
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["f-copyright__right"]}>
          <div className={styles["f-copyright__lc"]}>
            <div className={styles["f-copyright__lc-l"]}>
              <Image src="/icon/globe.svg" width={16} height={16} alt="globe" />
              <Link href="#" className={styles["f-copyright__lc-l-link"]}>
                <span>English&nbsp;(US)</span>
              </Link>
            </div>
            <div className={styles["f-copyright__lc-c"]}>
              <Link href="#" className={styles["f-copyright__lc-c-link"]}>
                $&nbsp;<span>USD</span>
              </Link>
            </div>
          </div>
          <div className={styles["f-copyright__right-social"]}>
            <Link
              href="https://www.fb.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["f-copyright__right-social-link"]}
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["f-copyright__right-social-link"]}
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["f-copyright__right-social-link"]}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["f-copyright__right-social-link"]}
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright;
