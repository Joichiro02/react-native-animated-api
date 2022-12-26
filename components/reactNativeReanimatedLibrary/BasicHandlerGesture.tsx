import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

type ContextType = {
    translateX: number; // this data type is for this context.translateX
    translateY: number; // this data type is for this context.translateY
};

const BasicHandlerGesture = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        ContextType
    >({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: (event) => {
            const distance = Math.sqrt(
                translateX.value ** 2 + translateY.value ** 2
            );
            if (distance < CIRCLE_RADIUS + SIZE / 2) {
                translateX.value = withSpring(0); //this will back to the initial position with spring animation
                translateY.value = withSpring(0); //this will back to the initial position with spring animation
            }
        },
    });
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, reanimatedStyle]} />
                </PanGestureHandler>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "cyan",
        borderRadius: 20,
        borderWidth: 1,
        opacity: 0.5,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "coral",
    },
});

export default BasicHandlerGesture;
