import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import PinchableImage from './Gestures';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>Index</Text>
            <PinchableImage
                imageUri='https://pyxis.nymag.com/v1/imgs/96f/df7/e9c29ae783216fdf86dcc72e977ec4538a-08-baby-groot.rsquare.w700.jpg'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});