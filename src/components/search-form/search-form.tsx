import styles from "./search-form.module.scss";

import Button from "../ui/button/button";
import { GoSearch } from "react-icons/go";

import React, { useEffect, useRef, useState } from "react";
import { type DateRangeProps, DateRange, RangeKeyDict } from "react-date-range";
import MyDateRange, { SelectedRangeDate } from "../ui/inputs/my-date-range";
import format from "date-fns/format";
import classNames from "classnames";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function SearchForm() {
  const [dateRange, setDateRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: ""
  });

  const formRef = useRef<HTMLFormElement>(null);

  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [dateRangeFlip, setDateRangeFlip] = useState(false);

  const [dateSelect, setDateSelect] = useState(false);

  console.log(dateRangeFlip);

  useEffect(() => {
    const handleScroll = () => {
      const formEl = formRef.current;

      const dateRangeHeight =
        dateRangeRef.current?.getBoundingClientRect().height || 405.890625;

      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const distanceFromTop = rect.top - window.scrollY;

        console.log("Distance top: ", distanceFromTop);
        console.log("dateRangeHeight: ", dateRangeHeight);

        if (distanceFromTop > dateRangeHeight / 2) {
          setDateRangeFlip(true);
        } else if (distanceFromTop * -1 > dateRangeHeight / 2) {
          setDateRangeFlip(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formattedStartDate = format(dateRange.startDate, "EEE d MMM");
  const formattedEndDate = format(dateRange.endDate, "EEE d MMM");

  const disableDates = [
    new Date("2024-03-07"),
    new Date("2024-03-08"),
    new Date("2024-03-09")
  ];

  const handleChange = () => {
    setDateSelect((prevValue) => !prevValue);
  };

  const handleCheckInOutDates = (dateRange: RangeKeyDict) => {
    setDateRange({
      startDate: dateRange.selection!.startDate!,
      endDate: dateRange.selection!.endDate!,
      key: dateRange.selection!.key!
    });
  };

  return (
    <>
      <form className={styles["search-form"]} ref={formRef}>
        <div className={styles["search-form__inputs"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="location" className={styles["form-label"]}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Where are you going?"
              className={styles["form-input"]}
            />
          </div>

          <div className={`${styles["form-group"]}`}>
            <label htmlFor="checkin" className={styles["form-label"]}>
              Check in - Check out
            </label>
            <span onClick={handleChange} className={styles["form-value"]}>
              {formattedStartDate} - {formattedEndDate}
            </span>
            {dateSelect && (
              <div
                ref={dateRangeRef}
                className={classNames(
                  styles["form-date"],
                  styles[
                    `${dateRangeFlip ? "form-date-tri-b" : "form-date-tri-t"}`
                  ]
                )}
                style={{ [dateRangeFlip ? "bottom" : "top"]: "150%" }}
              >
                <MyDateRange onDateValue={handleCheckInOutDates} months={2} />
              </div>
            )}
          </div>

          <div className={`${styles["form-group"]}`}>
            <label htmlFor="guest" className={styles["form-label"]}>
              Guest
            </label>
            <span className={styles["form-value"]}>
              2 adults - 1 childeren - 1 room
            </span>
          </div>
        </div>
        <Button
          size="lg"
          color="blue"
          radius="full"
          type="submit"
          starticon={<GoSearch fontSize={20} />}
          className={styles["form-btn"]}
        >
          Search
        </Button>
      </form>
    </>
  );
}

export default SearchForm;
