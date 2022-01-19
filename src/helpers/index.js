import {weatherApi} from "../api/weather-api";

export const dataDestruct = async (data) => {
    const {
        coord: {lat, lon},
        sys: {country},
        name: city,
        weather: [{main, description, icon}],
        main: {temp}
    } = data;

    const result = {
        city,
        country,
        weather: {main, description, temp, icon},
    };

    const {data: {daily}} = await weatherApi.getCityNextDayWeather(lat, lon);
    const slice = daily.slice(1, 7);
    const sliceSort = slice.map(elem => {
        const {
            dt,
            temp,
            feels_like,
            weather: [{main, description, icon}]
        } = elem;

        return {dt, temp, feels_like, weather: {main, description, icon}}
    })

    result["forecast"] = sliceSort;
    return result
}