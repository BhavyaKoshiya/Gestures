import React from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const PinchableImage = ({ imageUri }) => {

    const screen = Dimensions.get('window')
    const scale = new Animated.Value(1)

    const onPinchEvent = Animated.event(
        [
            {
                nativeEvent: { scale: scale }
            }
        ],
        {
            useNativeDriver: true
        }
    )
    const onPinchStateChange = event => {
        if (event.nativeEvent.oldState === true) {
            Animated.spring(scale, {
              toValue: 1,
              useNativeDriver: true
            }).start()
          }
    }
    return (
        <PinchGestureHandler
            onGestureEvent={onPinchEvent}
            onHandlerStateChange={onPinchStateChange}>
            <Animated.Image
                source={{ uri: imageUri }}
                style={{
                    width: screen.width,
                    height: screen.width,
                    transform: [{ scale: scale }]
                }}
                resizeMode='contain'
            />
        </PinchGestureHandler>
    )
}

export default PinchableImage;
