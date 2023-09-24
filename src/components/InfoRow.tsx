import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../styles/colors';

type Props = {
    title: string;
    value: string;
};

export const InfoRow = ({title, value}: Props) => {
    return (
        <View style={styles.infoRow}>
            <Text style={styles.title}>{title}:</Text>
            <Text style={styles.dataValueText}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoRow: {
        padding: 15,
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        textTransform: 'capitalize',
    },
    dataValueText: {
        color: COLORS.gray,
        fontWeight: 'bold',
    },
});
