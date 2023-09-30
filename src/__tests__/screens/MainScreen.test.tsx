import React from 'react';
import {rest} from 'msw';
import {server} from '../../../mocks/server';
import {render, waitFor} from '@testing-library/react-native';
import {MainScreen} from '../../screens/MainScreen';
import {BASE_URL} from '../../api/constants';

// Mock the NotificationModuleInterface
// jest.mock('../../modules/notifications', () => ({
//     showAppNotification: jest.fn(),
// }));

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
        const {getByTestId, getByText} = render(<MainScreen />);

        // Wait for the data to load
        await waitFor(() => getByTestId('list'));

        // Check if the list items are rendered
        expect(getByText('Paris')).toBeDefined();
        expect(getByText('Madrid')).toBeDefined();
    });

    // it('triggers notification on button press', async () => {
    //     const {getByTestId} = render(<MainScreen />);
    //
    //     // Wait for the data to load
    //     await waitFor(() => getByTestId('list'));
    //
    //     // Mock the Math.random function to always return 0
    //     const originalMathRandom = Math.random;
    //     Math.random = () => 0;
    //
    //     // Click the notification button
    //     fireEvent.press(getByTestId('notificationButton'));
    //
    //     // Restore the original Math.random function
    //     Math.random = originalMathRandom;
    //
    //     // Check if the showAppNotification function was called with the expected arguments
    //     const {showAppNotification} = require('../../modules/notifications');
    //     expect(showAppNotification).toHaveBeenCalledWith(
    //         'Weather in Paris',
    //         'mist',
    //     );
    // });

    it('renders loading state', async () => {
        // Mock the hook returning different data
        server.use(
            rest.get(BASE_URL, (req, res, ctx) => {
                return res(ctx.delay(1000));
            }),
        );
        const {getByTestId} = render(<MainScreen />);
        await waitFor(() => getByTestId('loader'));
        expect(getByTestId('loader')).toBeDefined();
    });

    it('renders error state', async () => {
        server.use(
            rest.get(BASE_URL, (req, res, ctx) => {
                return res(ctx.status(500));
            }),
        );
        const {getByText, getByTestId} = render(<MainScreen />);
        await waitFor(() => getByTestId('error'));

        expect(getByText('Ooops, something went wrong :(')).toBeDefined();
    });
});
