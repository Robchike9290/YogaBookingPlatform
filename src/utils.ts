export const addWeeks = function (date: Date, weeks: number) {
  date.setDate(date.getDate() + 7 * weeks);
  return date;
};

export const formatDateString = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so add 1
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export const getDateParts = (today: Date): [string, string, number] => {
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();

  return [month, day, year];
};

export const addSpaceBetweenAndCapitalizeEachWord = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (s) => s.toUpperCase());
};
