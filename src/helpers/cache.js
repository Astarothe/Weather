import { delay } from '../constants/constants';

export function cache(city) {
  if (city) {
    const current = new Date().getTime();
    const passed = new Date(city.time).getTime();
    const difference = (current - passed);
    const parse = parseInt(difference / (1000 * 60));
    return parse < delay;
  }
  return false;
}
