import {useSelector} from "react-redux";
import {EditableSpan} from "../EditableSpan";

export const Location = () => {
    const {city, country} = useSelector(state => state.weather)

    return (
        <div>
            <EditableSpan city={city}/>
            <p>Country: {country}</p>
        </div>
    )
}