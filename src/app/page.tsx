"use client";
import CardBlog from "@/components/card-blog/card-blog";
import CardDestination from "@/components/card-destination/card-destination";
import CurrencyModal from "@/components/modal/modal";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";

import Pagination from "@/components/pagination/pagination";
import SearchForm from "@/components/search-form/search-form";
import MyDateRange from "@/components/ui/inputs/my-date-range";

import { useState } from "react";

export default function Home() {
  return (
    <>
      <div style={{ padding: "100px", marginTop: "400px", height: "800rem" }}>
        <SearchForm />
      </div>
    </>
  );
}
