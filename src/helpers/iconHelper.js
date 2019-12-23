const iconHelper = (icon) => {
    switch (icon) {
        case "Clouds":
            return Skycons.CLOUDY;
        case "Clear":
            return Skycons.CLEAR_DAY;
        case "Mist":
            return Skycons.FOG;
        case "Fog":
            return Skycons.FOG;
        case "Rain":
            return Skycons.RAIN;
        case "Snow":
            return Skycons.SNOW;
        case "Drizzle":
            return Skycons.SLEET;
    }
}

export default iconHelper;