import axios from 'axios';

import {API_KEY, BASE_URL, ENV} from '../constants';
import {TEST_DATA} from './testData';

export const fetchWeatherData = async (groupIds: number[]) => {
    if (ENV === 'test') {
        return TEST_DATA;
    }
    const {data} = await axios.get(BASE_URL, {
        params: {
            id: groupIds.join(','),
            appId: API_KEY,
            units: 'metric',
        },
    });
    return data?.list || [];
};
