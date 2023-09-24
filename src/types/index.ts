export type MainWeatherInfo = {
    name: string;
    conditions: string;
    iconUrl: string;
    temp: string;
};

export type FullWeatherInfo = MainWeatherInfo & {
    humidity: number;
    pressure: number;
    windSpeed: number;
    cloudCover: number;
};

export type TestId = {
    testID: string;
};
