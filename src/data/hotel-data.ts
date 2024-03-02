export interface GoogleLocation {
  address: string;
  city: string;
  state?: string;
  country?: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Rating {
  score: number;
  type: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface TaxesAndCharges {
  amount: number;
  currency: string;
}

export interface Room {
  roomId: string | number;
  type: string;
  bed: string;
  capacity: number;
  amenities: string[];
  availability: boolean;
  price: Price;

  images: string[];
  description?: string;
  squareFootage?: number;
  view?: string;
  bedType?: string;
  nonSmoking?: boolean;
  promotions?: string[];
  cleaningStatus?: string;
  currency: string; // Added currency field
}

export interface Hotel {
  hotelId: string | number;
  name: string;
  isRecommend?: boolean;
  isFavourite: boolean;
  badge?: string;
  location: GoogleLocation;
  rating: Rating;
  totalReviews: number; // Moved from Rating
  room: Room;
  taxesAndCharges: TaxesAndCharges;
  images?: string[];
}

export const hotels: Hotel[] = [
  {
    hotelId: 1,
    name: "The Montcalm At Brewery London City",
    badge: "Breakfast included",
    isRecommend: true,
    isFavourite: false,
    location: {
      address: "123 Example St",
      city: "Shoreditch",
      state: "London",
      country: "United Kingdom",
      postalCode: "EC1V 9LR",
      coordinates: {
        lat: 51.5238,
        lng: -0.0769
      }
    },
    rating: {
      score: 4.7,
      type: "Superb"
    },
    totalReviews: 2542,
    room: {
      roomId: 101,
      type: "Double Room",
      bed: "1 queen bed",
      capacity: 2,
      amenities: ["Free Wi-Fi", "Gym", "Restaurant"],
      availability: true,
      price: {
        amount: 120,
        currency: "USD"
      },
      images: [
        "/hotel/gp-hotel-1.jpg",
        "/hotel/gp-hotel-2.jpg",
        "/hotel/gp-hotel-3.jpg",
        "/hotel/gp-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 342,
      currency: "USD"
    },
    images: [
      "/hotel/gp-hotel-1.jpg",
      "/hotel/gp-hotel-2.jpg",
      "/hotel/gp-hotel-3.jpg",
      "/hotel/gp-hotel-4.jpg"
    ]
  },
  {
    hotelId: 2,
    name: "Staycity Aparthotels Deptford Bridge Station",
    isRecommend: true,
    isFavourite: false,
    location: {
      address: "456 Sample Ave",
      city: "Islington",
      state: "London",
      country: "United Kingdom",
      postalCode: "N1 2XY",
      coordinates: {
        lat: 51.5294,
        lng: -0.1125
      }
    },
    rating: {
      score: 4.6,
      type: "Wonderful"
    },
    totalReviews: 1821,
    room: {
      roomId: 102,
      type: "Twin Room",
      bed: "2 single beds",
      capacity: 2,
      amenities: ["Breakfast included", "Free Wi-Fi", "Bar"],
      availability: true,
      price: {
        amount: 85,
        currency: "USD"
      },
      images: [
        "/hotel/tb-hotel-1.jpg",
        "/hotel/tb-hotel-2.jpg",
        "/hotel/tb-hotel-3.jpg",
        "/hotel/tb-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 258,
      currency: "USD"
    },
    images: [
      "/hotel/tb-hotel-1.jpg",
      "/hotel/tb-hotel-2.jpg",
      "/hotel/tb-hotel-3.jpg",
      "/hotel/tb-hotel-4.jpg"
    ]
  },
  {
    hotelId: 3,
    name: "The Westin New York at Times Square",
    isRecommend: true,
    badge: "Best Seller",
    isFavourite: false,
    location: {
      address: "123 Example St",
      city: "Shoreditch",
      state: "London",
      country: "United Kingdom",
      postalCode: "EC1V 9LR",
      coordinates: {
        lat: 51.5238,
        lng: -0.0769
      }
    },
    rating: {
      score: 4.9,
      type: "Exceptional"
    },
    totalReviews: 4278,
    room: {
      roomId: 103,
      type: "Studio Suite",
      bed: "1 king-size bed",
      capacity: 2,
      amenities: ["Free cancellation", "Kitchenette", "Spa access"],
      availability: true,
      price: {
        amount: 180,
        currency: "USD"
      },
      images: [
        "/hotel/tcl-hotel-1.jpg",
        "/hotel/tcl-hotel-2.jpg",
        "/hotel/tcl-hotel-3.jpg",
        "/hotel/tcl-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 523,
      currency: "USD"
    },
    images: [
      "/hotel/tcl-hotel-1.jpg",
      "/hotel/tcl-hotel-2.jpg",
      "/hotel/tcl-hotel-3.jpg",
      "/hotel/tcl-hotel-4.jpg"
    ]
  },
  {
    hotelId: 4,
    name: "DoubleTree by Hilton Hotel New York Times Square West",
    isRecommend: true,
    isFavourite: false,
    location: {
      address: "456 Sample Ave",
      city: "Islington",
      state: "London",
      country: "United Kingdom",
      postalCode: "N1 2XY",
      coordinates: {
        lat: 51.5294,
        lng: -0.1125
      }
    },
    rating: {
      score: 4.5,
      type: "Fabulous"
    },
    totalReviews: 1472,
    room: {
      roomId: 104,
      type: "Executive Double Room",
      bed: "1 king-size bed",
      capacity: 2,
      amenities: ["Free Wi-Fi", "24-hour room service", "Concierge service"],
      availability: true,
      price: {
        amount: 150,
        currency: "USD"
      },
      images: [
        "/hotel/mt-hotel-1.jpg",
        "/hotel/mt-hotel-2.jpg",
        "/hotel/mt-hotel-3.jpg",
        "/hotel/mt-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 432,
      currency: "USD"
    },
    images: [
      "/hotel/mt-hotel-1.jpg",
      "/hotel/mt-hotel-2.jpg",
      "/hotel/mt-hotel-3.jpg",
      "/hotel/mt-hotel-4.jpg"
    ]
  },
  {
    hotelId: "5",
    name: "The Ned villa hotels, at Camden London",
    isRecommend: true,
    isFavourite: true,
    location: {
      address: "789 Test Blvd",
      city: "Camden",
      state: "London",
      country: "United Kingdom",
      postalCode: "NW1 8AB",
      coordinates: {
        lat: 51.5349,
        lng: -0.1273
      }
    },
    rating: {
      score: 4.8,
      type: "Exceptional"
    },
    totalReviews: 3847,
    room: {
      roomId: "unique_room_id_1",
      type: "Deluxe Room",
      bed: "1 queen bed",
      capacity: 2,
      amenities: ["Breakfast included", "Spa access", "Rooftop bar"],
      availability: true,
      price: {
        amount: 210,
        currency: "USD"
      },
      images: [
        "/hotel/tn-hotel-1.jpg",
        "/hotel/tn-hotel-2.jpg",
        "/hotel/tn-hotel-3.jpg",
        "/hotel/tn-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 618,
      currency: "USD"
    },
    images: [
      "/hotel/tn-hotel-1.jpg",
      "/hotel/tn-hotel-2.jpg",
      "/hotel/tn-hotel-3.jpg",
      "/hotel/tn-hotel-4.jpg"
    ]
  },
  {
    hotelId: "6",
    name: "DoubleTree by Hilton Hotel New York Times Square West",
    isRecommend: true,
    badge: "Top Rated",
    isFavourite: true,
    location: {
      address: "789 Test Blvd",
      city: "Camden",
      state: "London",
      country: "United Kingdom",
      postalCode: "NW1 8AB",
      coordinates: {
        lat: 51.5349,
        lng: -0.1273
      }
    },
    rating: {
      score: 4.8,
      type: "Exceptional"
    },
    totalReviews: 3847,
    room: {
      roomId: "unique_room_id_1",
      type: "Deluxe Room",
      bed: "1 queen bed",
      capacity: 2,
      amenities: ["Breakfast included", "Spa access", "Rooftop bar"],
      availability: true,
      price: {
        amount: 210,
        currency: "USD"
      } as Price,
      images: [
        "/hotel/tn-hotel-1.jpg",
        "/hotel/tn-hotel-2.jpg",
        "/hotel/tn-hotel-3.jpg",
        "/hotel/tn-hotel-4.jpg"
      ],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 618,
      currency: "USD"
    },
    images: [
      "/hotel/tn-hotel-1.jpg",
      "/hotel/tn-hotel-2.jpg",
      "/hotel/tn-hotel-3.jpg",
      "/hotel/tn-hotel-4.jpg"
    ]
  },
  {
    hotelId: "7", // Ensure it is unique
    name: "The Trafalgar St. James, London",
    isFavourite: false,
    location: {
      address: "101 Trial Rd",
      city: "Mayfair",
      state: "London",
      country: "United Kingdom",
      postalCode: "W1K 4QQ",
      coordinates: {
        lat: 51.5122,
        lng: -0.1411
      }
    },
    rating: {
      score: 4.7,
      type: "Superb",
      totalReviews: 2198
    } as Rating,
    totalReviews: 2198, // Moved from Rating
    room: {
      roomId: "unique_room_id_2", // Ensure it is unique
      type: "Junior Suite",
      bed: "1 king-size bed",
      capacity: 2, // Assuming capacity is 2, update accordingly
      amenities: ["Free cancellation", "City views", "Fitness center"],
      availability: true, // Adjust as needed
      price: {
        amount: 135,
        currency: "USD" // Update with the appropriate currency code
      },
      images: [
        "/hotel/ttsj-hotel-1.jpg",
        "/hotel/ttsj-hotel-2.jpg",
        "/hotel/ttsj-hotel-3.jpg",
        "/hotel/ttsj-hotel-4.jpg"
      ],
      currency: "USD" // Added currency field
    },
    taxesAndCharges: {
      amount: 397,
      currency: "USD" // Update with the appropriate currency code
    },
    images: [
      "/hotel/ttsj-hotel-1.jpg",
      "/hotel/ttsj-hotel-2.jpg",
      "/hotel/ttsj-hotel-3.jpg",
      "/hotel/ttsj-hotel-4.jpg"
    ]
  },
  {
    hotelId: "8", // Ensure it is unique
    name: "The Marylebone, London",
    isFavourite: false,
    location: {
      address: "303 Showcase Lane",
      city: "Westminster",
      state: "London",
      country: "United Kingdom",
      postalCode: "SW1A 1AA",
      coordinates: {
        lat: 51.5092,
        lng: -0.1272
      }
    },
    rating: {
      score: 4.8,
      type: "Exceptional"
    },
    totalReviews: 2941, // Moved from Rating
    room: {
      roomId: "unique_room_id_3", // Ensure it is unique
      type: "Deluxe Double Room",
      bed: "1 king-size bed",
      capacity: 2, // Assuming capacity is 2, update accordingly
      amenities: ["Free Wi-Fi", "24-hour concierge", "Pet-friendly"],
      availability: true, // Adjust as needed
      price: {
        amount: 165,
        currency: "USD" // Update with the appropriate currency code
      },
      images: ["/hotel/hotel-1.jpg"],
      currency: "USD" // Added currency field
    },
    taxesAndCharges: {
      amount: 483,
      currency: "USD" // Update with the appropriate currency code
    },
    images: ["/hotel/hotel-1.jpg"]
  },
  {
    hotelId: "9",
    name: "The Ace Hotel Shoreditch, London",
    isFavourite: true,
    location: {
      address: "505 Model Street",
      city: "Marylebone",
      state: "London",
      country: "United Kingdom",
      postalCode: "W1G 8QQ",
      coordinates: {
        lat: 51.5195,
        lng: -0.1472
      }
    },
    rating: {
      score: 4.6,
      type: "Wonderful"
    },
    totalReviews: 1972,
    room: {
      roomId: "unique_room_id_5",
      type: "Queen Room",
      bed: "1 queen bed",
      capacity: 2,
      amenities: [
        "Free Wi-Fi",
        "On-site live music venue",
        "Record player in room"
      ],
      availability: true,
      price: {
        amount: 110,
        currency: "USD"
      },
      images: ["/hotel/hotel-3.jpg"],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 324,
      currency: "USD"
    },
    images: ["/hotel/hotel-3.jpg"]
  },
  {
    hotelId: "10",
    name: "CitizenM Tower of London, London",
    isFavourite: true,
    location: {
      address: "606 Sample Lane",
      city: "Westminster",
      state: "London",
      country: "United Kingdom",
      postalCode: "SW1H 0AD",
      coordinates: {
        lat: 51.5122,
        lng: -0.1229
      }
    },
    rating: {
      score: 4.5,
      type: "Fabulous"
    },
    totalReviews: 2514,
    room: {
      roomId: "unique_room_id_6",
      type: "Mood Room",
      bed: "1 king-size bed",
      capacity: 2,
      amenities: [
        "Mood-lighting control system",
        "XXL king-size bed option",
        "24/7 self-service check-in"
      ],
      availability: true,
      price: {
        amount: 140,
        currency: "USD"
      },
      images: ["/hotel/hotel-4.jpg"],
      currency: "USD"
    },
    taxesAndCharges: {
      amount: 412,
      currency: "USD"
    },
    images: ["/hotel/hotel-4.jpg"]
  }
];
