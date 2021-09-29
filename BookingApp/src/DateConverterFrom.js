export const dateConverterFrom = (hotel) => {
  let DateNew = new Date(hotel);
  const longEnUSFormatter = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return "Desde el " + longEnUSFormatter.format(DateNew);
};
