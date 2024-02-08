"use client";
import CardBlog from "@/components/card-blog/card-blog";
import CardDestination from "@/components/card-destination/card-destination";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div>
        <CardBlog
          imgLink="/blog/Swiss canton of Bern.png"
          size="lg"
          title="10 European ski destinations you 
        should visit this winter"
          extraSmallText="Ut enim ad minim veniam, quis nostrud exerc
        ullamco laboris nisi ut aliquip."
          date={new Date()}
        />
        <CardBlog
          imgLink="/blog/Swiss canton of Bern.png"
          size="md"
          title="10 European ski destinations you 
        should visit this winter"
          date={new Date()}
        />
        <CardBlog
          imgLink="/blog/Swiss canton of Bern.png"
          size="sm"
          title="10 European ski destinations you 
        should visit this winter"
          date={new Date()}
        />
        <CardBlog
          imgLink="/blog/Swiss canton of Bern.png"
          size="sm"
          shadow="shadow-subtle"
          title="10 European ski destinations you 
        should visit this winter"
          date={new Date()}
        />
      </div>
    </>
  );
}
