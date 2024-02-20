import { useState } from "react";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    const filteredLoc = suggestions.filter((loc) =>
      loc.city.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredLoc);
  };

  return {
    onInputChange: handleInputChange,
    query,
    suggestions
  };
}
