export const formattedPrice = (
  price: number,
  currencyCode: string,
  locale?: string
) => {
  const formatter = new Intl.NumberFormat(locale || "en-US", {
    style: "currency",
    currency: currencyCode,
    maximumSignificantDigits: 2,
    maximumFractionDigits: 2
  });

  return formatter.format(price);
};
