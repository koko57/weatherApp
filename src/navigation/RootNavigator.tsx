import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '../screens/MainScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {RootStackParamList, RouteNames} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteNames.Main}
                component={MainScreen}
                options={{title: 'Weather'}}
            />
            <Stack.Screen name={RouteNames.Details} component={DetailsScreen} />
        </Stack.Navigator>
    );
};
