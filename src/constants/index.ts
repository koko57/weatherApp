import Config from 'react-native-config';

export const API_KEY = Config.API_KEY ?? '';
export const BASE_URL = Config.BASE_URL ?? '';
export const ENV = Config.ENV ?? '';

console.log({API_KEY, BASE_URL, ENV});
