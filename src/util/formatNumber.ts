export const formatNumber = (number: number) => {
  return new Intl.NumberFormat(navigator.language || "en-US").format(number);
};
