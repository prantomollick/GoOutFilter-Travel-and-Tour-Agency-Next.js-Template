export const formatDate = (date: Date) => {
  //Get the default locale  from the browser
  const browserDefaultLocale = navigator.language || "en-US";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formatted = new Intl.DateTimeFormat(
    browserDefaultLocale,
    options
  ).format(date);

  return formatted;
};
