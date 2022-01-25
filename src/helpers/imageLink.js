import { imageWeather } from '../api/weather-api';

export const imageLink = (icon) => `${imageWeather}${icon}@2x.png`;
