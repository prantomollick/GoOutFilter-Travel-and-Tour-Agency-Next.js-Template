import styles from "./search-form.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Button from "../ui/button/button";
import { GoSearch } from "react-icons/go";

import React, { useState } from "react";
import { type DateRangePickerProps, DateRange } from "react-date-range";

function SearchForm() {
  const [selectedRange, setSelecteRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const disableDates = [
    new Date("2024-02-20"), // Disable February 20, 2024
    new Date("2024-03-07") // Disable February 25, 2024
  ];

  const handleDateSelect = (date) => {
    setSelecteRange(date.selection);
  };

  return (
    <>
      <DateRange
        ranges={[selectedRange]}
        onChange={handleDateSelect}
        minDate={new Date()}
        editableDateInputs={false}
        showMonthAndYearPickers={false}
        direction="horizontal"
        showDateDisplay={false}
        disabledDates={disableDates}
        months={2}
        color="#02044A"
        rangeColors={["#13357B", "#F5F5F5"]}
        showMonthArrow={false}
      />
      <form className={styles["search-form"]}>
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

            {/* <input
            type="text"
            id="checkin"
            name="checkin"
            placeholder="Wed 2 Mar - Fri 11 Apr"
            className={styles["form-input"]}
        /> */}
          </div>

          <div className={`${styles["form-group"]}`}>
            <label htmlFor="guest" className={styles["form-label"]}>
              Guest
            </label>
            <input
              type="text"
              id="guest"
              name="guests"
              placeholder="2 adults - 1 children - 1 room"
              className={styles["form-input"]}
              disabled={true}
            />
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
