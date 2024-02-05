"use client";
import CardDestination from "@/components/card-destination/card-destination";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <CardDestination
        size="xl"
        imgLink="/destination/london.jpg"
        title="London"
      />
    </>
  );
}
