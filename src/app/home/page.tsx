import Modal from "@/components/modal/modal";
import React from "react";
import Hero from "./components/hero/hero";
import PdestinationSection from "./components/p-destination-section/p-destination-section";
import RecommendSection from "./components/recommend-section/recommend-section";

function Home() {
  return (
    <main>
      <Hero />
      <PdestinationSection />
      <RecommendSection />
    </main>
  );
}

export default Home;
