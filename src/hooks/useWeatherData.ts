import {useEffect, useState} from 'react';

import {fetchWeatherData} from '../api/fetchWeatherData';
import {CITIES_LIST} from '../constants/citiesList';
import {mapWeatherData} from '../utils/mapWeatherData';
import {FullWeatherInfo} from '../types';

export const useWeatherData = () => {
    const [data, setData] = useState<[] | FullWeatherInfo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const responseData = await fetchWeatherData(CITIES_LIST);
            const mappedData = mapWeatherData(responseData);
            setData(mappedData);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {loading, error, data};
};
