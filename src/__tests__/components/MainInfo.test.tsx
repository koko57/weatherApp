import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {MainInfo} from '../../components/MainInfo';

const mainInfo = {
    name: 'Paris',
    conditions: 'cloudy',
    temp: '13.8',
    iconUrl: '',
};

describe('MainInfo component', () => {
    it('should render the component with proper values', () => {
        render(<MainInfo testID={''} {...mainInfo} />);

        expect(screen.getByText(mainInfo.name)).toBeTruthy();
    });
});
