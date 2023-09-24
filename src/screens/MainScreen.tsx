import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ListItem} from '../components/ListItem';
import {useWeatherData} from '../hooks/useWeatherData';
import {Loader} from '../components/Loader';
import {ErrorMessage} from '../components/ErrorMessage';
import NotificationModuleInterface from '../modules/notifications';
import {NotificationButton} from '../components/NotificationButton';

export const MainScreen = () => {
    const {data, error, loading} = useWeatherData();

    const onButtonPress = () => {
        const randomCityIndex = Math.floor(Math.random() * data.length);
        NotificationModuleInterface.showAppNotification(
            `Weather in ${data[randomCityIndex].name}`,
            data[randomCityIndex].conditions,
        );
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage text="Ooops, something went wrong :(" />;
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                testID="list"
                renderItem={({item, index}) => {
                    return <ListItem {...item} testID={`listItem-${index}`} />;
                }}
            />
            {/*<NotificationButton onPress={onButtonPress} />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
