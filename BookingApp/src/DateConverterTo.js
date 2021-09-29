export const dateConverterTo = (hotel) => {
  let DateNew = new Date(hotel);
  const longEnUSFormatter = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return "Hasta el " + longEnUSFormatter.format(DateNew);
};
