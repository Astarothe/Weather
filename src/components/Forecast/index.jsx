import {useSelector} from "react-redux";
import {Weather} from "../Weather";
import {ForecastContainer, WeatherContainer} from "./component";

export const Forecast = (props) => {
    const {main, description, temp, icon} = useSelector(state => state.weather.weather)
    const arrWeather = useSelector(state => state.weather.forecast)

    const arrWeatherSort = arrWeather.map((elem, index) => {
        const {
            weather,
            temp: {day: temp},
            feels_like,
            ...other
        } = elem;

        return <Weather key={index} {...weather} temp={temp} {...feels_like} {...other}/>
    })
    return (
        <ForecastContainer>
            <Weather main={main} description={description} temp={temp} icon={icon}/>
            <WeatherContainer>
                {arrWeatherSort}
            </WeatherContainer>
        </ForecastContainer>
    )
}