import PropTypes, { string, number } from 'prop-types'

export const hourlyForecastsForecastTypes = PropTypes.shape({
    time: string.isRequired,
    temperature: number.isRequired,
    windSpeed: number.isRequired,
    relHumidity: number.isRequired,
})