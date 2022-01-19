import {Date} from "../Date";
import {Location} from "../Location";
import {Forecast} from "../Forecast";
import Background from "../../assets/image/287141.jpg"
export const Content = (props) => {
    return(
        <div style={{background: `url(${Background}) center top no-repeat`, height: "100vh"}}>
            <Date/>
            <Location/>
            <Forecast/>
        </div>
    )
}
