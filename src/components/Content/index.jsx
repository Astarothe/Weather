import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import { ContentWrapper } from './component';
import { WeatherWeek } from '../WeatherWeek';
import { COMPLETED, LOADING } from '../../constants/constants';
import { Loader } from '../Loader';
import { loading } from '../../selectors';
import TodayDate from '../TodayDate';
import Weather from '../Weather';

function Content() {
  const { status } = useSelector(loading);
  const [initialize, setInitialize] = useState(false);

  if (!initialize && status !== COMPLETED) {
    return <Loader />;
  }

  if (!initialize && status === COMPLETED) {
    setInitialize(true);
  }

  return (
    <>
      <ContentWrapper>
        <TodayDate />
        <Weather />
      </ContentWrapper>
      <WeatherWeek />
      {status === LOADING && <Loader />}
    </>
  );
}

export default Content;
