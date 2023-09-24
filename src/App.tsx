import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './navigation/RootNavigator';
import {navigationTheme} from './navigation/theme';

const App = () => {
    return (
        <NavigationContainer theme={navigationTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default App;
