import { WEATHER_USER } from '../constants/constants';

const initialState = {};

export const weatherReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case WEATHER_USER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
