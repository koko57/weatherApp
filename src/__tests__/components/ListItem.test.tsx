import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {ListItem} from '../../components/ListItem';
import {mappedMockedData} from '../../../mocks/mockData';

const props = mappedMockedData[0];

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

describe('ListItem component', () => {
    it('should render with proper values', () => {
        render(<ListItem testID={''} {...props} />);

        const button = screen.getByText('Paris');
        expect(button).toBeOnTheScreen();
    });

    it('should fire navigate fn onPress', () => {
        render(<ListItem testID={''} {...props} />);

        const button = screen.getByText('Paris');
        fireEvent.press(button);
        expect(mockedNavigate).toHaveBeenCalled();
    });
});
