import React from 'react';

import { WeatherMainContainer } from './component';
import { WeatherCurrent } from './WeatherCurrent';
import { Location } from './Location';

function Weather() {

  return (
    <WeatherMainContainer>
      <Location />
      <WeatherCurrent />
    </WeatherMainContainer>
  );
}

export default Weather;
