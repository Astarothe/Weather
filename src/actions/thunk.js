import { COMPLETED, ERROR, LOADING } from '../constants/constants';
import { weatherApi } from '../api/weather-api';
import { dataDestruct } from '../helpers';
import { cache } from '../helpers/cache';
import {
  addCityCache, addWeatherUser, changeLoader, changeStatus,
} from './actions';

export const getWeatherUser = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch(changeStatus(LOADING));

    const { data } = await weatherApi.getWeather(latitude, longitude);
    const result = await dataDestruct(data);

    dispatch(addCityCache(result.city, result, new Date()));
    dispatch(addWeatherUser(result));
    dispatch(changeLoader(null));
  } catch (err) {
    dispatch(changeLoader(ERROR));
  } finally {
    dispatch(changeStatus(COMPLETED));
  }
};

export const getCityWeather = (name) => async (dispatch, getState) => {
  try {
    dispatch(changeStatus(LOADING));

    const city = getState().searchResults[name];
    const res = cache(city);
    if (res) {
      dispatch(addWeatherUser(city.data));
      dispatch(changeLoader(null));
      return;
    }

    const { data } = await weatherApi.getCityWeather(name);
    const result = await dataDestruct(data);

    dispatch(addCityCache(name, result, new Date()));
    dispatch(addWeatherUser(result));
    dispatch(changeLoader(null));
  } catch (err) {
    dispatch(changeLoader(ERROR));
  } finally {
    dispatch(changeStatus(COMPLETED));
  }
};
