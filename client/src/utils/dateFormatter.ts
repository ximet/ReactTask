const dateFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

function isToday(date: Date) {
  const today = new Date();

  if (today.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}

const dateFormatter = (timestamp: string | undefined | Date, fullDate = false) => {
  let day;
  let year;
  let time;

  if (timestamp) {
    const date = new Date(timestamp);

    [day, year, time] = date.toLocaleString('en-US', dateFormat).split(',');

    if (isToday(date)) {
      day = 'Today';
    }
  }

  if (fullDate) {
    return { day, year, time };
  }

  return { day, time };
};

export default dateFormatter;
