import { isScrollFlipPopUp } from "@/util/scroll-to-flip";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { RangeKeyDict } from "react-date-range";
import type { SelectedRangeDate } from "./my-date-range";

export const useDateRange = () => {
  const [dateRange, setDateRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: ""
  });

  const popupDateRangeRef = useRef<HTMLDivElement>(null);
  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDateFlipToTop, setIsDateFlipToTop] = useState(false);

  useEffect(() => {
    const handleDateRangeOutside = (e: MouseEvent) => {
      if (!dateRangeRef.current?.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("click", handleDateRangeOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleDateRangeOutside, false);
    };
  }, [isVisible]);

  useEffect(() => {
    // If the user scrolls down and the calendar pop up appears in viewport, we flip it to top
    const handleScroll = () => {
      const isFlip = isScrollFlipPopUp(dateRangeRef, popupDateRangeRef);
      setIsDateFlipToTop(isFlip);
    };

    if (isVisible) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const formattedStartDate = format(dateRange.startDate, "EEE d MMM");
  const formattedEndDate = format(dateRange.endDate, "EEE d MMM");

  const handleVisibilityChange = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  const handleCheckInOutDates = (dateRange: RangeKeyDict) => {
    setDateRange({
      startDate: dateRange.selection!.startDate!,
      endDate: dateRange.selection!.endDate!,
      key: dateRange.selection!.key!
    });
  };

  return {
    onVisibilityChange: handleVisibilityChange,
    isVisible,
    dateRange,
    isDateFlipToTop,
    onDateRange: handleCheckInOutDates,
    popupDateRangeRef,
    dateRangeRef,
    formattedDateRangeVal: {
      startDate: formattedStartDate,
      endDate: formattedEndDate
    }
  };
};
