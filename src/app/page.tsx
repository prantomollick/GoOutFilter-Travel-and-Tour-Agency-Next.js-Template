"use client";
import CardDestination from "@/components/card-destination/card-destination";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <CardDestination
        size="md"
        imgLink="/destination/london.jpg"
        title="London"
        extraSmallText="147,681 travellers"
      />
      <CardDestination
        size="sm"
        imgLink="/destination/london.jpg"
        title="London UK"
        extraSmallText="147,681 travellers"
      />
      <CardDestination
        size="xs"
        imgLink="/destination/london.jpg"
        title="London UK"
        extraSmallText="147,681 travellers"
      />
    </>
  );
}
