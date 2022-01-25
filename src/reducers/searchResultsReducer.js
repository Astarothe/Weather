import { ADD_CITY } from '../constants/constants';

const initialState = {};

export const searchResultsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        [action.city]: {
          data: action.data,
          time: action.time,
        },
      };
    default:
      return state;
  }
};
