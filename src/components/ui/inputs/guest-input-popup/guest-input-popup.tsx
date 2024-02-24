import React, { RefObject, forwardRef, useEffect } from "react";
import styles from "./guest-input-popup.module.scss"; // Import the module
import { MinusIcon } from "./minus.icon";
import PlusIcon from "./plus-icon";
import classNames from "classnames";

import { CounterKey, type CounterState } from "./use-guest-input";

interface GuestInputPopupProps {
  onIncrement: (type: CounterKey) => void;
  onDecrement: (type: CounterKey) => void;
  guestPopupFlipToTop: boolean;
  onVisibilityChange?: () => void;
  CounterState: CounterState;
}

const GuestInputPopup = forwardRef<HTMLDivElement, GuestInputPopupProps>(
  ({ onIncrement, onDecrement, guestPopupFlipToTop, CounterState }, ref) => {
    return (
      <div
        className={classNames(
          styles["guest-input-popup"],
          styles[
            `${
              !guestPopupFlipToTop
                ? "guest-input-popup-top-tri"
                : "guest-input-popup-bottom-tri"
            }`
          ]
        )}
        style={{
          [!guestPopupFlipToTop ? "top" : "bottom"]: "150%"
        }}
        ref={ref}
      >
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
              onClick={() => onDecrement(CounterKey.ADULTS)}
              type="button"
              disabled={CounterState.adults === 0}
            >
              <MinusIcon />
            </button>
            <span className={styles["counter-value"]}>
              {CounterState.adults}
            </span>
            <button
              className={classNames(
                styles["counter-button"],
                styles["increment"]
              )}
              onClick={() => onIncrement(CounterKey.ADULTS)}
              type="button"
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
              onClick={() => onDecrement(CounterKey.CHILDREN)}
              type="button"
              disabled={CounterState.children === 0}
            >
              <MinusIcon />
            </button>
            <span className={styles["counter-value"]}>
              {CounterState.children}
            </span>
            <button
              className={classNames(
                styles["counter-button"],
                styles["increment"]
              )}
              onClick={() => onIncrement(CounterKey.CHILDREN)}
              type="button"
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
              onClick={() => onDecrement(CounterKey.ROOMS)}
              type="button"
              disabled={CounterState.rooms === 0}
            >
              <MinusIcon />
            </button>
            <span className={styles["counter-value"]}>
              {CounterState.rooms}
            </span>
            <button
              className={classNames(
                styles["counter-button"],
                styles["increment"]
              )}
              onClick={() => onIncrement(CounterKey.ROOMS)}
              type="button"
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

GuestInputPopup.displayName = "GuestInputPopup";

export default GuestInputPopup;
