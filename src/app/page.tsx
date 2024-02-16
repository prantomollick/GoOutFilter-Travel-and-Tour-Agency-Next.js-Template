"use client";
import CardBlog from "@/components/card-blog/card-blog";
import CardDestination from "@/components/card-destination/card-destination";
import CurrencyModal from "@/components/modal/modal";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";

import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <NavigationTabCard
        btnText="Experinces"
        title="Things to do on your trip"
        imgLink="/navigation-card/hotel.jpg"
      />
    </>
  );
}
