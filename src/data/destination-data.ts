const MAX_RANDOM_CITIES = 5;

export interface City {
  city: string;
  properties: number;
}

export interface DestinationData {
  [region: string]: City[];
}

export const destinationData: DestinationData = {
  "North America": [
    { city: "Los Angeles", properties: 12683 },
    { city: "San Diego", properties: 12683 },
    { city: "Boston", properties: 12683 },
    { city: "Miami", properties: 12683 },
    { city: "New York", properties: 12683 },
    { city: "Chicago", properties: 12683 },
    { city: "Toronto", properties: 12683 },
    { city: "Vancouver", properties: 12683 },
    { city: "Seattle", properties: 12683 },
    { city: "Dallas", properties: 12683 },
    { city: "Houston", properties: 12683 },
    { city: "Denver", properties: 12683 },
    { city: "Atlanta", properties: 12683 },
    { city: "Phoenix", properties: 12683 },
    { city: "Montreal", properties: 12683 },
    { city: "San Francisco", properties: 12683 },
    { city: "Washington, D.C.", properties: 12683 }
  ],
  Europe: [
    { city: "Santorini", properties: 12683 },
    { city: "Mykonos", properties: 12683 },
    { city: "Jersey", properties: 12683 },
    { city: "Istanbul", properties: 12683 },
    { city: "London", properties: 12683 },
    { city: "Prag", properties: 12683 },
    { city: "Ibiza", properties: 12683 },
    { city: "Paris", properties: 12683 },
    { city: "Amsterdam", properties: 12683 },
    { city: "Rome", properties: 12683 },
    { city: "Reykjavik", properties: 12683 },
    { city: "Florence", properties: 12683 },
    { city: "Krakow", properties: 12683 }
  ],
  Asia: [
    { city: "Phuket", properties: 12683 },
    { city: "Tokyo", properties: 12683 },
    { city: "Seoul", properties: 12683 },
    { city: "Bangkok", properties: 12683 },
    { city: "Shanghai", properties: 12683 },
    { city: "Mumbai", properties: 12683 },
    { city: "Beijing", properties: 12683 },
    { city: "Singapore", properties: 12683 },
    { city: "Kuala Lumpur", properties: 12683 },
    { city: "Manila", properties: 12683 },
    { city: "Hong Kong", properties: 12683 },
    { city: "Ho Chi Minh City", properties: 12683 },
    { city: "Osaka", properties: 12683 },
    { city: "Taipei", properties: 12683 },
    { city: "Jakarta", properties: 12683 },
    { city: "Delhi", properties: 12683 }
  ],
  "Middle East": [
    { city: "Dubai", properties: 12683 },
    { city: "Doha", properties: 12683 },
    { city: "Riyadh", properties: 12683 },
    { city: "Tel Aviv", properties: 12683 },
    { city: "Istanbul", properties: 12683 },
    { city: "Abu Dhabi", properties: 12683 },
    { city: "Muscat", properties: 12683 },
    { city: "Amman", properties: 12683 },
    { city: "Kuwait City", properties: 12683 },
    { city: "Manama", properties: 12683 },
    { city: "Jeddah", properties: 12683 },
    { city: "Beirut", properties: 12683 },
    { city: "Jerusalem", properties: 12683 },
    { city: "Cairo", properties: 12683 },
    { city: "Dammam", properties: 12683 },
    { city: "Sharjah", properties: 12683 }
  ]
};

export const getRandomCitiesFromRegion = (regionCities: City[]): City[] => {
  const shuffledCities = regionCities.sort(() => 0.5 - Math.random());
  return shuffledCities.slice(0, MAX_RANDOM_CITIES);
};

export const createAllTab = (): DestinationData => {
  const allTab: DestinationData = { all: [] };

  for (const region in destinationData) {
    if (destinationData.hasOwnProperty(region)) {
      const randomCities = getRandomCitiesFromRegion(destinationData[region]);
      allTab.all = allTab.all.concat(randomCities);
    }
  }
  return allTab;
};

export const updatedDestinationData: DestinationData = {
  ...createAllTab(),
  ...destinationData
};
