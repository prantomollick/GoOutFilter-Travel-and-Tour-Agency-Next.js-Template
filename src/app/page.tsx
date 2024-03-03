import CardMdHotel from "@/components/card-hotel/card-md-hotel";
import { hotels } from "@/data/hotel-data";
import { useEffect } from "react";

export default function Home() {
  const dummyHotels = [...hotels];

  // useEffect(() => {});

  const slideContent = dummyHotels.map((hotel) => (
    <CardMdHotel
      key={hotel.hotelId}
      images={hotel.images! as string[]}
      isFavourite={hotel.isFavourite}
      location={hotel.location}
      rating={hotel.rating}
      room={hotel.room}
      totalReviews={hotel.totalReviews}
      badge={hotel.badge}
      name={hotel.name}
    />
  ));

  return (
    <>
      <div className="container">{slideContent}</div>
    </>
  );
}
