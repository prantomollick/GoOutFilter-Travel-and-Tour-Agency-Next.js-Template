import { isScrollFlipPopUp } from "@/util/scroll-to-flip";
import { useEffect, useRef, useState } from "react";

export interface LocationData {
  city: string;
  location: string;
}

export const locationData: LocationData[] = [
  {
    city: "London",
    location: "Greater London, United Kingdom"
  },
  {
    city: "New York",
    location: "New York State, United States"
  },
  {
    city: "Paris",
    location: "France"
  },
  {
    city: "Madrid",
    location: "Spain"
  },
  {
    city: "Santorini",
    location: "Greece"
  }
];

export function useLocationSearchInput() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<LocationData[]>(locationData);
  const [isShowSugg, setIsShowSugg] = useState(false);

  const [isSuggFilpToTop, setIsSuggFlipToTop] = useState(false);
  const locSuggRefPopup = useRef<HTMLDivElement>(null);
  const locSuggInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDateRangeOutside = (e: MouseEvent) => {
      if (!locSuggRefPopup.current?.contains(e.target as Node)) {
        setIsShowSugg(false);
      }
    };

    if (isShowSugg && locSuggRefPopup.current) {
      document.addEventListener("click", handleDateRangeOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleDateRangeOutside, false);
    };
  }, [isShowSugg]);

  useEffect(() => {
    const handleScroll = () => {
      const isFlip = isScrollFlipPopUp(locSuggInputRef, locSuggRefPopup);
      setIsSuggFlipToTop(isFlip);
    };

    if (isShowSugg && locSuggRefPopup.current && locSuggInputRef.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShowSugg]);

  const handleClickInput = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setSuggestions(locationData.slice(0, 5));
    setIsShowSugg(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (!e.target.value) {
      setIsShowSugg(false);
      return;
    }
    const filteredLoc = locationData.filter((loc) =>
      loc.city.toLowerCase().includes(query.toLowerCase())
    );
    setIsShowSugg(true);
    setSuggestions(filteredLoc);
  };

  const handleClickSugLocValue = (suggession: LocationData) => {
    setQuery(suggession.city);
    setIsShowSugg(false);
  };

  return {
    onInputChange: handleInputChange,
    onClickInput: handleClickInput,
    onSugLocClick: handleClickSugLocValue,
    isSuggFilpToTop,
    locSuggRefPopup,
    locSuggInputRef,
    isShowSugg,
    query,
    suggestions
  };
}
