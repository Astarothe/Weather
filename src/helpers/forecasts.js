import React from 'react-redux';
import { WeatherWeekItem } from '../components/WeatherWeek/WeatherWeekItem';

export function forecasts(forecast) {
  return forecast.map((elem) => {
    const {
      weather: { main, icon },
      temp,
      dt,
    } = elem;
    const date = new Date(dt * 1000);
    const weekDay = date.getDay();

    return (
      <WeatherWeekItem
        key={date}
        main={main}
        icon={icon}
        temp={temp}
        weekDay={weekDay}
      />
    );
  });
}
