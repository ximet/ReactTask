function dateHelper(date) {
    const weekDay = new Date(date).getDay();

    const weekDayMap = {
    0: 'Monday',
    1: 'Tuesday',
    2: "Wednesday",
    3: 'Thursday',
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
    }

    return weekDayMap[weekDay]
}

export default dateHelper;
