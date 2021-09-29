export const priceConverter = (price) => {
  if (price === 1) {
    return "$";
  } else if (price === 2) {
    return "$ $";
  } else if (price === 3) {
    return "$ $ $";
  } else if (price === 4) {
    return "$ $ $ $";
  }
  return price;
};
