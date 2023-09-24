import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {MainScreen} from '../../screens/MainScreen';
import {mappedMockedData} from '../mockData';
import {useWeatherData} from '../../hooks/useWeatherData';
import {FullWeatherInfo} from '../../types';

const mockData = mappedMockedData;
// Mock the useWeatherData hook
jest.mock('../../hooks/useWeatherData');

type MockedUseWeatherData = jest.Mock<{
    loading: boolean;
    error: boolean;
    data: [] | FullWeatherInfo[];
}>;

// Mock the NotificationModuleInterface
jest.mock('../../modules/notifications', () => ({
    showAppNotification: jest.fn(),
}));

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});

describe('MainScreen', () => {
    it('renders the list of cities', async () => {
        (useWeatherData as MockedUseWeatherData).mockReturnValue({
            data: mockData,
            error: false,
            loading: false,
        });
        const {getByTestId, getByText} = render(<MainScreen />);

        // Wait for the data to load
        await waitFor(() => getByTestId('list'));

        // Check if the list items are rendered
        expect(getByText('Paris')).toBeDefined();
        expect(getByText('Madrid')).toBeDefined();
    });

    it('triggers notification on button press', async () => {
        const {getByTestId} = render(<MainScreen />);

        // Wait for the data to load
        await waitFor(() => getByTestId('list'));

        // Mock the Math.random function to always return 0
        const originalMathRandom = Math.random;
        Math.random = () => 0;

        // Click the notification button
        fireEvent.press(getByTestId('notificationButton'));

        // Restore the original Math.random function
        Math.random = originalMathRandom;

        // Check if the showAppNotification function was called with the expected arguments
        const {showAppNotification} = require('../../modules/notifications');
        expect(showAppNotification).toHaveBeenCalledWith(
            'Weather in Paris',
            'mist',
        );
    });

    it('renders loading state', () => {
        // Mock the hook returning different data
        (useWeatherData as MockedUseWeatherData).mockReturnValue({
            data: [],
            error: false,
            loading: true,
        });
        const {getByTestId} = render(<MainScreen />);
        expect(getByTestId('loader')).toBeDefined();
    });

    it('renders error state', () => {
        (useWeatherData as MockedUseWeatherData).mockReturnValue({
            data: [],
            error: true,
            loading: false,
        });
        const {getByText} = render(<MainScreen />);
        expect(getByText('Ooops, something went wrong :(')).toBeDefined();
    });
});
