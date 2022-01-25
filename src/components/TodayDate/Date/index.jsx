import React, { useEffect, useState } from 'react';

import { WrapperDate } from './component';
import Clock from './Clock';
import Today from './Today';

function Date() {
  const [currentTime, setCurrentTime] = useState(() => new window.Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new window.Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WrapperDate>
      <Clock currentTime={currentTime} />
      <Today currentTime={currentTime} />
    </WrapperDate>
  );
}

export default Date;
