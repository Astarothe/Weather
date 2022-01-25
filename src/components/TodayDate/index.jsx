import React from 'react';
import Date from './Date';
import { Search } from '../Search';
import { TodayDateWrapper } from './component';

function TodayDate() {
  return (
    <TodayDateWrapper>
      <Date />
      <Search />
    </TodayDateWrapper>
  );
}

export default TodayDate;
