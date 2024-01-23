import {rest} from 'msw';
import {BASE_URL} from '../constants';
import {mockResponse} from './mockData';

export const handlers = [
    rest.get(BASE_URL, (req, res, ctx) => {
        return res(ctx.json(mockResponse));
    }),
];
