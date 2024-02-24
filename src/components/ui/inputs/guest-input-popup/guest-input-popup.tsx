import React from "react";
import styles from "./guest-input-popup.module.scss"; // Import the module
import { MinusIcon } from "./minus.icon";
import PlusIcon from "./plus-icon";
import classNames from "classnames";

function GuestInputPopup() {
  return (
    <div className={styles["guest-input-popup"]}>
      <div className={styles["guest-input-section"]}>
        <div className={styles["guest-input-label"]}>
          <span>Adults</span>
        </div>
        <div className={styles["guest-input-counter"]}>
          <button
            className={classNames(
              styles["counter-button"],
              styles["decrement"]
            )}
          >
            <MinusIcon />
          </button>
          <span className={styles["counter-value"]}>2</span>
          <button
            className={classNames(
              styles["counter-button"],
              styles["increment"]
            )}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className={styles["guest-input-section"]}>
        <div className={styles["guest-input-label"]}>
          <span>Children</span>
          <span>Ages 0 - 17</span>
        </div>
        <div className={styles["guest-input-counter"]}>
          <button
            className={classNames(
              styles["counter-button"],
              styles["decrement"]
            )}
          >
            <MinusIcon />
          </button>
          <span className={styles["counter-value"]}>1</span>
          <button
            className={classNames(
              styles["counter-button"],
              styles["increment"]
            )}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className={styles["guest-input-section"]}>
        <div className={styles["guest-input-label"]}>
          <span>Rooms</span>
        </div>
        <div className={styles["guest-input-counter"]}>
          <button
            className={classNames(
              styles["counter-button"],
              styles["decrement"]
            )}
          >
            <MinusIcon />
          </button>
          <span className={styles["counter-value"]}>1</span>
          <button
            className={classNames(
              styles["counter-button"],
              styles["increment"]
            )}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestInputPopup;
