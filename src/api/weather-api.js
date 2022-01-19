import axios from "axios";

const todayInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
})

const nextDaysInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
})

export const imageWeather = "https://openweathermap.org/img/wn/"


const appid = "70e1a9b65ddf8bff53f1e64a88f6c012"

export const weatherApi = {
    getWeather(latitude,longitude){
        return todayInstance.get(`?lat=${latitude}&lon=${longitude}&units=${"Metric"}&appid=${appid}`)
    },
    getCityWeather(city){
        return todayInstance.get(`?q=${city}&units=${"Metric"}&appid=${appid}`)
    },
    getCityNextDayWeather(latitude,longitude){
        return nextDaysInstance.get(`onecall?lat=${latitude}&lon=${longitude}&units=${"Metric"}&appid=${appid}`)
    }
}