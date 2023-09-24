import React from 'react';
import {render} from '@testing-library/react-native';
import {DetailsScreen} from '../../screens/DetailsScreen'; // Import your DetailsScreen component

// Mock the navigation route object
const mockRoute = {
    params: {
        item: {
            name: 'Paris',
            conditions: 'Sunny',
            temp: 25,
            humidity: 60,
            pressure: 1015,
            windSpeed: 10,
            cloudCover: 20,
            iconUrl: 'https://example.com/sunny.png',
        },
    },
};

describe('DetailsScreen Integration Tests', () => {
    it('renders DetailsScreen with data', () => {
        const {getByTestId, getByText} = render(
            <DetailsScreen route={mockRoute} />,
        );

        // Check if MainInfo component is rendered
        expect(getByTestId('details')).toBeTruthy();

        // Check if the weather details are displayed
        expect(getByText('60%')).toBeTruthy();
        expect(getByText('1015 hPa')).toBeTruthy();
        expect(getByText('10 km/h')).toBeTruthy();
        expect(getByText('20%')).toBeTruthy();
    });

    it('renders ErrorMessage when there is no data', () => {
        // @ts-ignore
        const {getByText} = render(<DetailsScreen route={{}} />);

        // Check if ErrorMessage component is rendered
        expect(getByText('No data found :(')).toBeTruthy();
    });
});
