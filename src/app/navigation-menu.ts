export interface NavigationItem {
  label: string;
  link: string;
  subnav?: SubNavigationItem[];
}

export interface SubNavigationItem {
  label: string;
  link?: string;
  isActive?: boolean;
  tabDetails?: TabDetail[];
  tabCard?: TabCard;
}

export interface TabDetail {
  title: string;
  list: { label: string; link: string }[];
}

export interface TabCard {
  imgSrc: string;
  heading: string;
  btnText: string;
}

export const navigationMenu: NavigationItem[] = [
  {
    label: "Home",
    link: "/home",
    subnav: [
      { label: "Home 1", link: "#" },
      { label: "Home 2", link: "#" }
    ]
  },
  {
    label: "Categories",
    link: "/categories",
    subnav: [
      {
        label: "Hotel",
        isActive: false,
        tabDetails: [
          {
            title: "Hotel List",
            list: [
              { label: "Hotel List V1", link: "#" },
              { label: "Hotel List V2", link: "#" },
              { label: "Hotel List V3", link: "#" },
              { label: "Hotel List V4", link: "#" },
              { label: "Hotel List V5", link: "#" }
            ]
          },
          {
            title: "Hotel Single",
            list: [
              { label: "Hotel Single V1", link: "#" },
              { label: "Hotel Single V2", link: "#" },
              { label: "Hotel Single V3", link: "#" }
            ]
          },
          {
            title: "Hotel Booking",
            list: [{ label: "Booking Page", link: "#" }]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/hotel.jpg",
          heading: "Things to do on your trip",
          btnText: "Experiences"
        }
      },
      {
        label: "Tour",
        isActive: false,
        tabDetails: [
          {
            title: "Tour List",
            list: [
              { label: "Tour List V1", link: "#" },
              { label: "Tour List V2", link: "#" },
              { label: "Tour List V3", link: "#" }
            ]
          },
          {
            title: "Tour Pages",
            list: [
              { label: "Tour Map", link: "#" },
              { label: "Tour Single", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/tour.jpg",
          heading: "Things to do on your Tour",
          btnText: "See tour"
        }
      },
      {
        label: "Activity",
        isActive: false,
        tabDetails: [
          {
            title: "Activity List",
            list: [
              { label: "Activity List 1", link: "#" },
              { label: "Activity List 2", link: "#" },
              { label: "Activity List 3", link: "#" },
              { label: "Activity List 4", link: "#" },
              { label: "Activity List 5", link: "#" },
              { label: "Activity List 6", link: "#" }
            ]
          },
          {
            title: "Activity Pages",
            list: [
              { label: "Activity Map", link: "#" },
              { label: "Activity Single", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/activity.jpg",
          heading: "Things to do on your activity",
          btnText: "See Activity"
        }
      },

      {
        label: "Holiday Rental",
        isActive: false,
        tabDetails: [
          {
            title: "Rental List",
            list: [
              { label: "Rental List 1", link: "#" },
              { label: "Rental List 2", link: "#" }
            ]
          },
          {
            title: "Rental Pages",
            list: [
              { label: "Rental Map", link: "#" },
              { label: "Rental Single", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/holiday-rental.jpg",
          heading: "Things to do on your rental",
          btnText: "See Rental"
        }
      },

      {
        label: "Car",
        isActive: false,
        tabDetails: [
          {
            title: "Car List",
            list: [
              { label: "Car List 1", link: "#" },
              { label: "Car List 2", link: "#" }
            ]
          },
          {
            title: "Car Pages",
            list: [
              { label: "Car Map", link: "#" },
              { label: "Car Single", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/car-rent.jpg",
          heading: "Things to do on your car",
          btnText: "See car"
        }
      },

      {
        label: "Cruise",
        isActive: false,
        tabDetails: [
          {
            title: "Cruise List",
            list: [
              { label: "Cruise List 1", link: "#" },
              { label: "Cruise List 2", link: "#" }
            ]
          },
          {
            title: "Cruise Pages",
            list: [
              { label: "Cruise Map", link: "#" },
              { label: "Cruise Single", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/cruise.jpg",
          heading: "Things to do on your cruise",
          btnText: "See cruise"
        }
      },
      {
        label: "Flights",
        isActive: false,
        tabDetails: [
          {
            title: "Flights List",
            list: [
              { label: "Flights List 1", link: "#" },
              { label: "Flights List 2", link: "#" }
            ]
          }
        ],
        tabCard: {
          imgSrc: "/navigation-card/flights.jpg",
          heading: "Things to do on your flights",
          btnText: "See flights"
        }
      }
    ]
  },
  {
    label: "Destination",
    link: "/description"
  },
  {
    label: "Blog",
    link: "/blog",
    subnav: [
      { label: "Blog List V1", link: "#" },
      { label: "Blog List V2", link: "#" }
    ]
  },
  {
    label: "Pages",
    link: "#",
    subnav: [
      { label: "404", link: "#" },
      { label: "About", link: "#" },
      { label: "Become expert", link: "#" }
    ]
  },
  {
    label: "Contact",
    link: "/contact"
  }
];
