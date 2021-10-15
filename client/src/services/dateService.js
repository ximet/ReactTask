import { dateOptions, timeOptions, dateFormat } from '../globalConsts'

export const formateDate = (unformatedDate) => {
    const fullDate = new Date(unformatedDate);

    const date = fullDate.toLocaleString(dateFormat, dateOptions);
    const time = fullDate.toLocaleString(dateFormat, timeOptions);

    return {date, time}
}

export const getCurrentTimeByTimeZone = (timeZone) => {
    return new Date().toLocaleString(dateFormat, {...timeOptions, timeZone: timeZone})
}