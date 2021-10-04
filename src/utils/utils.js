export function formatTemperature(temperature) {
    return +temperature <= 0 ? temperature : `+${temperature}`;
}