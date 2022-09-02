export const convertTime = (timeData: string) => {
  const date = new Date(timeData);

  return {
    date: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    month: date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  };
};
