import { LOADER, STATUS } from '../constants/constants';

const initialState = {
  loading: null,
  status: null,
};

export const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loading: action.data,
      };
    case STATUS:
      return {
        ...state,
        status: action.data,
      };
    default:
      return state;
  }
};
