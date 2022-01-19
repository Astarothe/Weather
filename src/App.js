import './App.css';
import React, {useEffect} from "react";
import {usePosition} from "./castom/usePosition";
import {useDispatch, useSelector} from "react-redux";
import {getWeatherUser} from "./actions/actions";
import {Content} from "./components/Content";
import {COMPLETED} from "./constants/constants";

function App() {
    const {latitude, longitude, error} = usePosition()
    const {status} = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        latitude &&
        longitude && dispatch(getWeatherUser(latitude, longitude))

    }, [latitude, longitude, dispatch])

    return (
        <div>
            {status === COMPLETED ? <Content/> : <h1>LOAD</h1>}
        </div>
    );
}

export default App;
