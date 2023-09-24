import axios from 'axios';

import {API_KEY, BASE_URL} from './constants';

export const fetchWeatherData = async (groupIds: number[]) => {
    const {data} = await axios.get(BASE_URL, {
        params: {
            id: groupIds.join(','),
            appId: API_KEY,
            units: 'metric',
        },
    });
    return data?.list || [];
};
