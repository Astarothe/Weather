import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputCityTablet, LabelCityTablet } from './component';
import { getCityWeather } from '../../../actions/thunk';

export function SearchTablet({ error }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);

  const onChangeInputHandler = (e) => {
    setValue(e.currentTarget.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter' && value !== city) {
      dispatch(getCityWeather(value));
    }
  };

  return (
    <>
      <LabelCityTablet htmlFor="search">
        Search City:
        {' '}
        <InputCityTablet
          value={value}
          onChange={onChangeInputHandler}
          onKeyPress={onKeyPressHandler}
          id="search"
          name="search"
          error={error}
        />

      </LabelCityTablet>
      {error && <span>Uncorrect</span>}
    </>

  );
}
