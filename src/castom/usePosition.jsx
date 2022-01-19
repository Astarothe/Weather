import {useState, useEffect} from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
    const onChange = ({coords: {latitude, longitude}}) => {
        setPosition({latitude, longitude});
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }

        geo.getCurrentPosition(onChange, onError);

    }, []);

    return {...position, error};
}