import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CityInput, LabelCityInput } from './component';
import { getCityWeather } from '../../../actions/thunk';

export function SearchMobile({ error }) {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const onBlurHandler = () => {
    setIsActive(false);
  };

  const onChangeInputHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(getCityWeather(value));
    }
  };

  const call = () => {
    setIsActive(true);
  };

  return (
    <LabelCityInput htmlFor="searchMobile" onClick={call}>
      {isActive && (
      <CityInput
        type="text"
        value={value}
        autoFocus
        onBlur={onBlurHandler}
        onChange={onChangeInputHandler}
        onKeyPress={onKeyPressHandler}
        name="searchMobile"
        id="searchMobile"
        error={error}
      />
      )}
    </LabelCityInput>

  );
}
