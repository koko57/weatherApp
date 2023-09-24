import {CityWeatherData} from '../api/types';

export const mapWeatherData = (data: CityWeatherData[]) => {
    if (!data) {
        return [];
    }
    return data.map(item => {
        return {
            name: item.name,
            conditions: item.weather[0].description,
            temp: item.main.temp.toFixed(1),
            humidity: item.main.humidity,
            pressure: item.main.pressure,
            windSpeed: item.wind.speed,
            cloudCover: item.clouds.all,
            iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        };
    });
};
