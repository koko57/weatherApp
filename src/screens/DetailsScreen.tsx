import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainInfo} from '../components/MainInfo';
import {InfoRow} from '../components/InfoRow';
import {RootStackParamList, RouteNames} from '../navigation/types';
import {ErrorMessage} from '../components/ErrorMessage';

type DetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    RouteNames.Details
>;

export const DetailsScreen = ({route}: DetailsScreenProps) => {
    const screenData = route.params?.item;

    if (!screenData) {
        return <ErrorMessage text="No data found :(" />;
    }

    const {
        name,
        conditions,
        temp,
        humidity,
        pressure,
        windSpeed,
        cloudCover,
        iconUrl,
    } = screenData;

    return (
        <>
            <MainInfo
                name={name}
                conditions={conditions}
                temp={temp}
                iconUrl={iconUrl}
                testID="details"
            />
            <InfoRow title="humidity" value={`${humidity}%`} />
            <InfoRow title="pressure" value={`${pressure} hPa`} />
            <InfoRow title="wind speed" value={`${windSpeed} km/h`} />
            <InfoRow title="cloud cover" value={`${cloudCover}%`} />
        </>
    );
};
