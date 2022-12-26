import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

const WORDS = ["Mark", "Anthony", "Joichiro"];
const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;

interface PageProps {
    title: string;
    index: number;
    translateX: Animated.SharedValue<number>;
}
const Page: React.FC<PageProps> = ({ title, index, translateX }) => {
    const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
    ]; //input range
    const reanimatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );
        const borderRadius = interpolate(
            translateX.value,
            inputRange,
            [0, SIZE / 2, 0],
            Extrapolate.CLAMP
        );
        return {
            transform: [{ scale }],
            borderRadius,
        };
    });

    const reanimatedTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            translateX.value,
            inputRange,
            [height / 2, 0, -height / 2],
            Extrapolate.CLAMP // best practice to have this always
        );
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [-2, 1, -2],
            Extrapolate.CLAMP // best practice to have this always
        );
        return {
            opacity,
            transform: [{ translateY }],
        };
    });
    return (
        <View
            style={{
                height,
                width,
                backgroundColor: `rgba(0,0,256,0.${index + 2})`,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Animated.View
                style={[
                    {
                        height: SIZE,
                        width: SIZE,
                        backgroundColor: "coral",
                        borderRadius: 10,
                    },
                    reanimatedStyle,
                ]}
            />
            <Animated.View
                style={[{ position: "absolute" }, reanimatedTextStyle]}
            >
                <Text
                    style={{
                        fontSize: 50,
                        textTransform: "uppercase",
                        fontWeight: "700",
                    }}
                >
                    {title}
                </Text>
            </Animated.View>
        </View>
    );
};

const ScrollViewAnimation = () => {
    const translateX = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });
    return (
        <Animated.ScrollView
            pagingEnabled // to have a snap effect when scrolling
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            horizontal
            style={styles.container}
        >
            {WORDS.map((item, index) => (
                <Page
                    key={index}
                    title={item}
                    index={index}
                    translateX={translateX}
                />
            ))}
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan",
    },
});

export default ScrollViewAnimation;
