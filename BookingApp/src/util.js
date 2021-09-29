export const filterArray = (
  hotelsData,
  country,
  price,
  rooms,
  fechaIn,
  fechaOut
) => {
  const newDateStart = new Date(fechaIn + "T00:00:00").getTime();
  const newDateEnd = new Date(fechaOut + "T00:00:00").getTime();

  const filteredArray = hotelsData
    .filter((hotel) => {
      if (country !== "Todos") {
        return hotel.country === country;
      }
      return hotel;
    })

    .filter((hotel) => {
      if (price === "$") {
        return hotel.price === 1;
      } else if (price === "$$") {
        return hotel.price === 2;
      } else if (price === "$$$") {
        return hotel.price === 3;
      } else if (price === "$$$$") {
        return hotel.price === 4;
      }
      if (price !== "Todos") {
        return hotel.price === price;
      }
      return hotel;
    })

    .filter((hotel) => {
      if (rooms === "Pequeño") {
        return hotel.rooms < 10;
      } else if (rooms === "Mediano") {
        return hotel.rooms > 10 && hotel.rooms < 40;
      } else if (rooms === "Grande") {
        return hotel.rooms > 40;
      }
      if (rooms !== "Todos") {
        return hotel.rooms === rooms;
      }
      return hotel;
    })

    .filter((hotel) => {
      if (newDateStart && newDateEnd) {
        return (
          newDateStart >= hotel.availabilityFrom &&
          newDateEnd <= hotel.availabilityTo
        );
      } else {
        return hotel;
      }
    });

  return filteredArray;
};
