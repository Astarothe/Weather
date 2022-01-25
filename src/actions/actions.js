import {
  ADD_CITY, LOADER, STATUS, WEATHER_USER,
} from '../constants/constants';

export const addWeatherUser = (data) => ({ type: WEATHER_USER, data });

export const changeStatus = (data) => ({ type: STATUS, data });

export const changeLoader = (data) => ({ type: LOADER, data });

export const addCityCache = (city, data, time) => ({
  type: ADD_CITY, city, data, time,
});
