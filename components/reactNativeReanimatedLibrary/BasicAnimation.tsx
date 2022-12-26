import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;

const BasicAnimation = () => {
    const progress = useSharedValue(1);
    const scale = useSharedValue(2);

    const handleRotate = (progress: Animated.SharedValue<number>) => {
        "worklet"; // to make it work it need the "worklet", if it not have this work it can cause an error
        return `${progress.value * 2 * Math.PI}rad`;
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            borderRadius: (progress.value * SIZE) / 2,
            transform: [
                {
                    scale: scale.value,
                },
                { rotate: handleRotate(progress) },
            ],
        };
    }, []);
    useEffect(() => {
        // progress.value = withTiming(0, { duration: 2000 });
        progress.value = withRepeat(withSpring(0.5), -1, true); // to repeat infinite just pass the -1 value
        scale.value = withRepeat(withSpring(1), -1, true); // to repeat infinite just pass the -1 value
    }, []);
    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    { height: SIZE, width: SIZE, backgroundColor: "coral" },
                    animatedStyle,
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default BasicAnimation;
