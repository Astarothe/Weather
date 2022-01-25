import React, { useSelector } from 'react-redux';
import { City, Country, LocationWrapper } from './component';
import { weatherAll } from '../../../selectors';

export function Location() {
  const { city, country } = useSelector(weatherAll);

  return (
    <LocationWrapper>
      <City>
        City:
        {' '}
        {city}
      </City>
      <Country>
        Country:
        {' '}
        {country}
      </Country>
    </LocationWrapper>
  );
}
