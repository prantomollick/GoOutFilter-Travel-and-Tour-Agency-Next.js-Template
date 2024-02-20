import { useEffect, useRef, useState } from "react";
import type { SelectedRangeDate } from "./my-date-range";
import { format } from "date-fns";
import { RangeKeyDict } from "react-date-range";

export const useDateRange = () => {
  const [dateRange, setDateRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: ""
  });

  const formRef = useRef<HTMLFormElement>(null);
  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [dateRangeFlip, setDateRangeFlip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formEl = formRef.current;

      const dateRangeHeight =
        dateRangeRef.current?.getBoundingClientRect().height || 405.890625;

      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const distanceFromTop = rect.top - window.scrollY;

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
    onDateRange: handleCheckInOutDates,
    formRef,
    dateRangeRef,
    dateRangeFlip,

    formattedDateRangeVal: {
      startDate: formattedStartDate,
      endDate: formattedEndDate
    }
  };
};
