import { imageWeather } from '../api/weather-api';

export const imageRequest = (icon) => `${imageWeather}${icon}@2x.png`;

export const positiveOrNegative = (temperature) => (temperature > 0 ? `+${temperature}` : temperature);
