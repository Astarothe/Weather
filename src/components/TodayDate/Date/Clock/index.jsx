import React from 'react';
import { Pm, Time } from './component';
import { timeSettings } from '../../../../helpers/date';

export default function Clock({ currentTime }) {
  const { time, pm } = timeSettings(currentTime);

  return (
    <Time>
      {time}
      <Pm>{pm}</Pm>
    </Time>
  );
}
