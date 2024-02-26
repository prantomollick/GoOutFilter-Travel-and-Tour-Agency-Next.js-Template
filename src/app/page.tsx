"use client";
import CardBlog from "@/components/card-blog/card-blog";
import CardDestination from "@/components/card-destination/card-destination";
import CurrencyModal from "@/components/modal/modal";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";

import Pagination from "@/components/pagination/pagination";
import SearchForm from "@/app/home/components/search-form/search-form";
import MyDateRange from "@/components/ui/inputs/my-date-range/my-date-range";

import { useState } from "react";
import Slider from "@/components/slider/slider";

export default function Home() {
  return (
    <>
      <div className="container">
        <Slider />
      </div>
    </>
  );
}
