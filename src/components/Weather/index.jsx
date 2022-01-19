import {imageWeather} from "../../api/weather-api";
import {week} from "../../constants/constants";
import {Description, Image, Temp, Title, WeatherWrapper} from "./Component";


export const Weather = ({icon, main, description, temp, dt}) => {
    const date = new Date(dt * 1000);
    const day = date.getDate()
    const weekDay = date.getDay()

    return (
        <WeatherWrapper>
            {dt ? <Description>{day} {week[weekDay]}</Description> : <Description>today</Description>}
            <Image src={`${imageWeather}${icon}@2x.png`}/>
            <Title>{main}</Title>
            <Description>{description}</Description>
            <Temp>{temp}</Temp>

        </WeatherWrapper>
    )
}