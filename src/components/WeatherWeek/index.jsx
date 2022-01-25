import React, { useSelector } from 'react-redux';

import { Prognosis, WeatherContainer, WrapperItems } from './component';
import { weatherForecast } from '../../selectors';
import { forecasts } from '../../helpers/forecasts';

export function WeatherWeek() {
  const forecast = useSelector(weatherForecast);
  const arrWeatherSort = forecasts(forecast);

  return (
    <WrapperItems>
      <Prognosis>Next 6 Days</Prognosis>
      <WeatherContainer>
        {arrWeatherSort}
      </WeatherContainer>
    </WrapperItems>
  );
}
