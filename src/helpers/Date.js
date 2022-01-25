import { EN } from '../constants/constants';

export function todaySettings(date) {
  const weekSettings = { weekday: 'long' };
  const monthSettings = { month: 'long' };
  const yearSettings = { year: 'numeric' };

  const week = date.toLocaleDateString(EN, weekSettings);
  const month = date.toLocaleDateString(EN, monthSettings);
  const year = date.toLocaleDateString(EN, yearSettings);
  const day = date.getDate();

  return {
    day, week, month, year,
  };
}

export const timeSettings = (date) => {
  const settings = {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  };

  const currentTime = date.toLocaleTimeString(EN, settings);
  const time = currentTime.slice(0, -2);
  const pm = currentTime.slice(-2);
  return { time, pm };
};
