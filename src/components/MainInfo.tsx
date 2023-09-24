import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../styles/colors';
import {MainWeatherInfo, TestId} from '../types';

type Props = TestId & MainWeatherInfo;

export const MainInfo = ({name, conditions, temp, iconUrl, testID}: Props) => {
    return (
        <View style={styles.wrapper} testID={testID}>
            <Image
                source={{uri: iconUrl}}
                style={styles.icon}
                accessibilityIgnoresInvertColors
                testID={`${testID}-icon`}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.cityText} testID={`${testID}-name`}>
                    {name}
                </Text>
                <Text
                    style={styles.conditionsText}
                    testID={`${testID}-conditions`}>
                    {conditions}
                </Text>
            </View>
            <View style={styles.tempWrapper} testID={`${testID}-temperature`}>
                <Text style={styles.tempText}>{temp} &deg;C</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 1,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    textWrapper: {
        flex: 2,
    },
    cityText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    conditionsText: {
        textTransform: 'capitalize',
        color: COLORS.gray,
        fontWeight: 'bold',
    },
    tempWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 95,
        borderRadius: 20,
        padding: 10,
        backgroundColor: COLORS.lightTeal,
    },
    tempText: {
        color: COLORS.white,
    },
});
