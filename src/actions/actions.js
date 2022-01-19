import {weatherApi} from "../api/weather-api";
import {COMPLETED, LOADING, STATUS, WEATHER_USER} from "../constants/constants";
import {dataDestruct} from "../helpers";

export const addWeatherUser = (data) => ({type: WEATHER_USER, data})
export const changeStatus = (data) => ({type: STATUS, data})

export const getWeatherUser = (latitude, longitude) => async (dispatch) => {
    try {
        dispatch(changeStatus(LOADING))
        const {data} = await weatherApi.getWeather(latitude, longitude);
        const result = await dataDestruct(data);

        dispatch(addWeatherUser(result));
    } catch (err) {
        console.error(err)
    } finally {
        dispatch(changeStatus(COMPLETED))
    }

}


export const getCityWeather = (er) => async (dispatch) => {
    try {
        dispatch(changeStatus(LOADING))
        const {data} = await weatherApi.getCityWeather(er)
        const result = await dataDestruct(data);

        dispatch(addWeatherUser(result));
    } catch (err) {
        console.error(err)
    } finally {
        dispatch(changeStatus(COMPLETED))
    }

}