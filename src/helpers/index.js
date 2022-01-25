import { weatherApi } from '../api/weather-api';
import cloud from '../assets/image/cloud.svg';
import drop from '../assets/image/drop.svg';
import wind from '../assets/image/wind.svg';
import { imageRequest, positiveOrNegative } from './imageRequest';

const destructNowDay = (data) => {
  const {
    coord: { lat, lon },
    sys: { country },
    name: city,
    weather: [{ main, description, icon: image }],
    main: { temp, humidity },
    clouds: { all: clouds },
    wind: { speed },
  } = data;

  const icon = imageRequest(image);

  const tempRound = Math.round(temp);
  const temperature = positiveOrNegative(tempRound);

  const conditions = [
    { img: cloud, title: `${clouds}%` },
    { img: drop, title: `${humidity}m/s` },
    { img: wind, title: `${speed}%` },
  ];

  const result = {
    city,
    country,
    weather: {
      main, description, temp: temperature, icon,
    },
    conditions,
  };

  return { result, lat, lon };
};

const destructForecast = async (lat, lon) => {
  const { data: { daily } } = await weatherApi.getCityNextDayWeather(lat, lon);
  const nextSixDays = daily.slice(1, 7);

  return nextSixDays.map((elem) => {
    const {
      dt,
      temp: { day: temp },
      weather: [{ main, description, icon: image }],
    } = elem;

    const icon = imageRequest(image);

    const tempRound = Math.round(temp);
    const temperature = positiveOrNegative(tempRound);

    return {
      dt,
      temp: temperature,
      weather: { main, description, icon },
    };
  });
};

export const dataDestruct = async (data) => {
  const { result, lat, lon } = destructNowDay(data);
  const forecast = await destructForecast(lat, lon);

  return { ...result, forecast };
};
