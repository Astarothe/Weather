import React from 'react';

import { TodayDay } from './component';
import { todaySettings } from '../../../../helpers/date';

export default function Today({ currentTime }) {
  const {
    day, week, month, year,
  } = todaySettings(currentTime);
  const date = `${week}, ${day} ${month} ${year}`;

  return (
    <TodayDay>{date}</TodayDay>
  );
}
