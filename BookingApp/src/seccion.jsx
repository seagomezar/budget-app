import React from "react";
import HotelCard from "./hotel-card";
import NotFound from "./notFound.jsx";
import { filterArray } from "./util";
import { dateConverterFrom } from "./DateConverterFrom";
import { dateConverterTo } from "./DateConverterTo";
import { priceConverter } from "./PriceConverter";

export default function Seccion(props) {
  let filteredHotels = filterArray(
    props.hotelList,
    props.country,
    props.price,
    props.rooms,
    props.fechaIn,
    props.fechaOut,
    props.notFound
  );

  const filterVariable = filteredHotels.map((hotel) => {
    return (
      <HotelCard
        cover={hotel.photo}
        naming={hotel.naming}
        startdate={dateConverterFrom(hotel.availabilityFrom)}
        enddate={dateConverterTo(hotel.availabilityTo)}
        description={hotel.description}
        city={hotel.city}
        rooms={hotel.rooms}
        price={priceConverter(hotel.price)}
      />
    );
  });
  if (filteredHotels.length !== 0) {
    return <div className="seccion">{filterVariable}</div>;
  }
  return <NotFound />;
}
