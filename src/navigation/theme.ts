import {DefaultTheme} from '@react-navigation/native';

import {COLORS} from '../styles/colors';

export const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.white,
    },
};
