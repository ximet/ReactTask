export const capitalize = s => s && s[0].toUpperCase() + s.slice(1);
export const toReadableDate = time => new Date(time).toDateString();
export const toReadableTime = time =>
  new Date(time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
