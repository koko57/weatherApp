import {mapWeatherData} from '../../utils/mapWeatherData';
import {mockResponse} from '../../../mocks/mockData';

const cityData = mockResponse.list[0];

describe('mapWeatherData function', () => {
    it('should return properly mapped data', () => {
        expect(mapWeatherData(mockResponse.list)[0]).toStrictEqual({
            name: cityData.name,
            conditions: cityData.weather[0].description,
            temp: cityData.main.temp.toFixed(1),
            humidity: cityData.main.humidity,
            pressure: cityData.main.pressure,
            windSpeed: cityData.wind.speed,
            cloudCover: cityData.clouds.all,
            iconUrl: `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
        });
    });
});
