import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePosition } from './castom/usePosition';
import { MainWrapper } from './components/Content/component';
import { ErrorGeo } from './components/ErrorGeo';
import { weatherAll } from './selectors';
import { getWeatherUser } from './actions/thunk';
import Content from './components/Content';

function App() {
  const { latitude, longitude, error } = usePosition();
  const dispatch = useDispatch();
  const allStore = useSelector(weatherAll);

  const store = Object.keys(allStore).length;

  useEffect(() => {
    if (latitude && longitude && !store) {
      dispatch(getWeatherUser(latitude, longitude));
    }
  }, [latitude, longitude, dispatch]);

  if (error && !store) {
    return <ErrorGeo>{error}</ErrorGeo>;
  }

  return (
    <MainWrapper>
      <Content />
    </MainWrapper>
  );
}

export default App;
