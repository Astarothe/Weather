import React, { useSelector } from 'react-redux';

import { WeatherWeekItem } from './WeatherWeekItem';
import { Prognosis, WeatherContainer, WrapperItems } from './component';
import { weatherForecast } from '../../selectors';

export function WeatherWeek() {
  const forecast = useSelector(weatherForecast);
  const arrWeatherSort = forecast.map((elem) => {
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

  return (
    <WrapperItems>
      <Prognosis>Next 6 Days</Prognosis>
      <WeatherContainer>
        {arrWeatherSort}
      </WeatherContainer>
    </WrapperItems>
  );
}
