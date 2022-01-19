import {useEffect, useState} from "react";
import {getCityWeather} from "../../actions/actions";
import {useDispatch} from "react-redux";


export const EditableSpan = ({city}) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(city)
    const dispatch = useDispatch()

    const onChange = () => setEditMode(true)

    const onBlurHandler = () => {
        if (value !== city) {
            dispatch(getCityWeather(value))
        }
        setEditMode(false)
    }

    const onChangeInputHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter" && value !== city) {
            dispatch(getCityWeather(value))
        }
    }
    useEffect(() => {
        setValue(city)
    }, [city])

    return (
        <>
            {editMode ?
                <input type="text"
                       value={value}
                       autoFocus
                       onBlur={onBlurHandler}
                       onChange={onChangeInputHandler}
                       onKeyPress={onKeyPressHandler}
                />
                : <span onDoubleClick={onChange}>City: {city}</span>}
        </>
    )
}