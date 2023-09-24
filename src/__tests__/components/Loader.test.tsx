import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Loader} from '../../components/Loader';

describe('Loader component', () => {
    it('should render correctly', () => {
        render(<Loader />);

        expect(screen.getByTestId('loader')).toBeOnTheScreen();
    });
});
