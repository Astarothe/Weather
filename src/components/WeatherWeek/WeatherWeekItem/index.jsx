import React from 'react';

import { week } from '../../../constants/constants';
import { WeekWeatherWrapper } from '../component';
import { Description } from '../../Weather/component';
import { Image, Temp, Title } from './component';

export function WeatherWeekItem({
  icon, main, temp, weekDay,
}) {
  return (
    <WeekWeatherWrapper>
      <Description>{week[weekDay]}</Description>
      <Image src={icon} width="50px" />
      <Title fontSize="15px" paddingBottom="5px">{main}</Title>
      <Temp fontSize="10px">
        {temp}
        {' '}
        °C
      </Temp>
    </WeekWeatherWrapper>
  );
}
