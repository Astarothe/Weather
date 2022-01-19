import {applyMiddleware, combineReducers, createStore} from "redux";
import {weatherReducer} from "./weatherReducer";
import thunkMiddleware from "redux-thunk"
import {loadingReducer} from "./loadingReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    loading: loadingReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))