import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { weatherReducer } from '../reducers/weatherReducer';
import { loadingReducer } from '../reducers/loadingReducer';
import { searchResultsReducer } from '../reducers/searchResultsReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  loading: loadingReducer,
  searchResults: searchResultsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

export const persistor = persistStore(store);
