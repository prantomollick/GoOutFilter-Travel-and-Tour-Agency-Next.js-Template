"use client";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalCount={200}
        pageSize={10}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </>
  );
}
