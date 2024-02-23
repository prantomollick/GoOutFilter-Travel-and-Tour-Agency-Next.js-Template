import { useEffect, useRef, useState } from "react";

export interface LocationData {
  city: string;
  location: string;
}

const locationData: LocationData[] = [
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
  const [isShowSuggession, setIsShowSuggession] = useState(false);
  const locSuggessionRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
    setIsShowSuggession(true);
    setSuggestions(locationData.slice(0, 5));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    console.log(e.target.value);

    if (!e.target.value) {
      setIsShowSuggession(false);
      return;
    }

    const filteredLoc = locationData.filter((loc) =>
      loc.city.toLowerCase().includes(query.toLowerCase())
    );
    setIsShowSuggession(true);
    setSuggestions(filteredLoc);
  };

  const handleSuggestedLocValue = (suggession: LocationData) => {
    setQuery(suggession.city);
    setIsShowSuggession(false);
  };

  return {
    onInputChange: handleInputChange,
    onFocus: handleFocus,
    onSuggestedLocation: handleSuggestedLocValue,
    locSuggessionRef,
    isShowSuggession,
    query,
    suggestions
  };
}
