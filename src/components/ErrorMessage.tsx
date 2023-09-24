import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
    text: string;
};
export const ErrorMessage = ({text}: Props) => {
    return (
        <View style={styles.wrapper}>
            <Text>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 120,
        alignItems: 'center',
    },
});
