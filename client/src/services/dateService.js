import { dateOptions, timeOptions, dateFormat } from '../globalConsts'

export const formatDate = (unformattedDate) => {
    const fullDate = new Date(unformattedDate);

    const date = fullDate.toLocaleString(dateFormat, dateOptions);
    const time = fullDate.toLocaleString(dateFormat, timeOptions);

    return {date, time}
}

export const getCurrentTimeByTimeZone = (timeZone) => {
    return new Date().toLocaleString(dateFormat, {...timeOptions, timeZone: timeZone})
}