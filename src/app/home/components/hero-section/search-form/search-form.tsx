"use client";
import styles from "./search-form.module.scss";

import type { FormEvent } from "react";
import { GoSearch } from "react-icons/go";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

import GuestInputPopup from "@/components/ui/inputs/guest-input-popup/guest-input-popup";
import { useGuestInput } from "@/components/ui/inputs/guest-input-popup/use-guest-input";

import LocationSearchInput from "@/components/ui/inputs/location-search-input/location-search-input";
import { useLocationSearchInput } from "@/components/ui/inputs/location-search-input/useLocationSearchInput";

import MyDateRange from "@/components/ui/inputs/my-date-range/my-date-range";
import { useDateRange } from "@/components/ui/inputs/my-date-range/useDateRange";
import Button from "@/components/ui/button/button";

function SearchForm() {
  const isTabletPotrait = useMediaQuery({ query: "(max-device-width: 900px)" });

  const {
    handleChange,
    selectedDateRange,
    onRangeFocusChange,
    isVisible,
    dateRangeRef,
    popupDateRangeRef,
    isDateFlipToTop,
    onVisibilityChange,
    formattedDateRangeVal: { startDate, endDate }
  } = useDateRange();

  const {
    onInputChange,
    onClickInput,
    isShowSugg,
    isSuggFilpToTop,
    locSuggRefPopup,
    locSuggInputRef,
    query,
    suggestions,
    onSugLocClick
  } = useLocationSearchInput();

  const {
    state: counterState,
    popupRef: guestPopupRef,
    rootElRef: guestRootElRef,
    handleDecrement,
    handleIncrement,
    onGuestPopupVisibility,
    popupFlipToTop: guestPopupFlipToTop
  } = useGuestInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query && selectedDateRange && counterState) {
      const FormData = {
        query: query.trim(),
        checkInOutDate: {
          startDate: selectedDateRange.startDate,
          endDate: selectedDateRange.endDate
        },
        guests: {
          adults: counterState.adults,
          children: counterState.children,
          room: counterState.rooms
        }
      };

      console.log(FormData);
    }
  };

  return (
    <form
      className={classNames(styles["search-form"], "bg-white", "rounded-full")}
      onSubmit={handleSubmit}
    >
      <div className={styles["search-form__inputs"]}>
        <div className={styles["form-group"]} ref={locSuggInputRef}>
          <label htmlFor="location" className={styles["form-label"]}>
            Location
          </label>
          <LocationSearchInput
            onQueryChange={onInputChange}
            queryValue={query}
            onClickInput={onClickInput}
            suggestions={suggestions}
            isShowSugg={isShowSugg}
            locSuggRefPopup={locSuggRefPopup}
            onClickSuggestion={onSugLocClick}
            isSuggFilpToTop={isSuggFilpToTop}
            placeholder="Where are you going?"
            id="location"
            name="location"
            autoComplete="off"
            className={styles["form-input"]}
          />
        </div>

        <div className={`${styles["form-group"]}`} ref={dateRangeRef}>
          <label htmlFor="checkin" className={styles["form-label"]}>
            Check in - Check out
          </label>
          <input
            onClick={onVisibilityChange}
            className={styles["form-input"]}
            value={`${startDate} - ${endDate}`}
            readOnly
            required
          />

          {isVisible && (
            <div
              ref={popupDateRangeRef}
              className={classNames(
                styles["form-date"],
                isDateFlipToTop
                  ? styles["form-date-tri-t"]
                  : styles["form-date-tri-b"]
              )}
              style={{ [isDateFlipToTop ? "bottom" : "top"]: "150%" }}
            >
              <MyDateRange
                onChange={handleChange}
                ranges={[selectedDateRange]}
                onVisibleChange={onVisibilityChange}
                onRangeFocusChange={onRangeFocusChange}
                months={isTabletPotrait ? 1 : 2}
              />
            </div>
          )}
        </div>

        <div className={`${styles["form-group"]}`} ref={guestRootElRef}>
          <label htmlFor="guest" className={styles["form-label"]}>
            Guest
          </label>
          <input
            id="guest"
            className={styles["form-input"]}
            onClick={() => onGuestPopupVisibility()}
            value={`${counterState.adults} adults - ${counterState.children} childeren -${counterState.rooms} room`}
            required
            readOnly
          ></input>
          {counterState.isVisible && (
            <GuestInputPopup
              CounterState={counterState}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              onVisibilityChange={onGuestPopupVisibility}
              guestPopupFlipToTop={guestPopupFlipToTop}
              ref={guestPopupRef}
            />
          )}
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
  );
}

export default SearchForm;
