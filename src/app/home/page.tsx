import React from "react";
import Hero from "./components/hero/hero";
import PdestinationSection from "./components/p-destination-section/p-destination-section";
import RecommendSection from "./components/recommend-section/recommend-section";
import FeatureSection from "./components/feature-section/feature-section";

export type Features = {
  icon: string;
  title: string;
  description: string;
};

const features: Features[] = [
  {
    icon: "/icon/feature-icon/price-guarantee.svg",
    title: "Best Price Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: "/icon/feature-icon/quick-booking.svg",
    title: "Easy & Quick Booking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: "/icon/feature-icon/customer-care.svg",
    title: "Customer Care 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function Home() {
  return (
    <main>
      <Hero />
      <PdestinationSection />
      <RecommendSection />
      <FeatureSection features={features} />
    </main>
  );
}

export default Home;
