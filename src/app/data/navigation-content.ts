export interface NavigationItem {
  label: string;
  link: string;
  subnav?: SubNavigationItem[];
}

interface SubNavigationItem {
  label: string;
  link: string;
  tabDetails?: TabDetail[];
  tabCard?: TabCard;
}

interface TabDetail {
  label: string;
  link: string;
}

interface TabCard {
  imgSrc: string;
  heading: string;
  btnText: string;
}

export const navigationContent: NavigationItem[] = [
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
    link: "#",
    subnav: [
      {
        label: "Hotel",
        link: "/hotel",
        tabDetails: [
          { label: "Hotel List", link: "#" },
          { label: "Hotel List V1", link: "#" }
        ],
        tabCard: {
          imgSrc: "./src/img/subnav-travel-through-world.png",
          heading: "Things to do on your trip",
          btnText: "Experiences"
        }
      },
      {
        label: "Tour",
        link: "/tour",
        tabDetails: [
          { label: "Tour List", link: "#" },
          { label: "Tour List V1", link: "#" }
        ],
        tabCard: {
          imgSrc: "./src/img/tour.jpg",
          heading: "Things to do on your Tour",
          btnText: "See all Tour"
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
    link: "/pages",
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
