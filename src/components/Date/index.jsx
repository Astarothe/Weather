import {useEffect, useState} from "react";
import {Time} from "./component";

export const Date = (props) => {
    const locale = 'en';
    const [today, setToday] = useState(() => new window.Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setToday(new window.Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const day = today.toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: 'long'})}\n\n ${today.toLocaleDateString(locale, {year: "numeric"})}`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
    });

    return (
        <>
            <Time>{time}</Time>
            <div>{date}</div>
            <div>{wish}</div>
        </>
    )
}