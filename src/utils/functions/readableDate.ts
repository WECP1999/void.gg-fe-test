const readableDate = (date: string) => {
  const parseDate = new Date(date);
  return `${parseDate.toLocaleDateString()} ${parseDate.toLocaleTimeString()}`;
};

export default readableDate;
