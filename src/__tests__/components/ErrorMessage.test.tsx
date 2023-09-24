import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {ErrorMessage} from '../../components/ErrorMessage';

const errorMessageTestText = 'Error Message Test';

describe('ErrorMessage', () => {
    it('should render with proper message', () => {
        render(<ErrorMessage text={errorMessageTestText} />);

        expect(screen.getByText(errorMessageTestText)).toBeTruthy();
    });
});
