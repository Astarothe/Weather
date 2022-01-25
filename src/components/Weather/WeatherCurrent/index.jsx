import React, { useSelector } from 'react-redux';
import { Conditions } from './Conditions';
import { Title, WeatherCurrentWrapper } from './component';
import { Description, Image, Temp } from '../component';
import { weatherStats } from '../../../selectors';

export function WeatherCurrent() {
  const {
    main,
    description,
    temp,
    icon,
  } = useSelector(weatherStats);

  return (
    <>
      <WeatherCurrentWrapper>
        <Image
          src={icon}
          width="70px"
          height="50px"
          objectFit="none"
          margin="0 0 10px"
        />
        <Title fontSize="24px">{main}</Title>
        <Description transform="capitalize">{description}</Description>
        <Temp fontSize="20px">
          {temp} °C
        </Temp>
      </WeatherCurrentWrapper>
      <Conditions />
    </>
  );
}
