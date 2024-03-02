import CardMdHotel from "@/components/card-hotel/card-md-hotel";
import { hotels } from "@/data/hotel-data";

export default function Home() {
  const dummyHotels = [hotels[0]];

  return (
    <>
      <div className="container">
        {dummyHotels.map((hotel) => (
          <CardMdHotel
            key={hotel.hotelId}
            images={hotel.images! as string[]}
            isFavourite={hotel.isFavourite}
            location={hotel.location}
            rating={hotel.rating}
            room={hotel.room}
            totalReviews={hotel.totalReviews}
            name={hotel.name}
          />
        ))}
      </div>
    </>
  );
}
