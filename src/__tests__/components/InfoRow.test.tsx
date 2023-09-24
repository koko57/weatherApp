import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {InfoRow} from '../../components/InfoRow';

const infoRowData = {
    title: 'pressure',
    value: '1023 hPa',
};

const title = new RegExp(infoRowData.title, 'i');

describe('InfoRow component', () => {
    it('should render with proper values', () => {
        render(<InfoRow {...infoRowData} />);

        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByText(infoRowData.value)).toBeTruthy();
    });
});
