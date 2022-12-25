import React, { useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const AnimatedValue = () => {
    const bottomValue = useState(new Animated.Value(0))[0]; //the purpose of [0] is to get only the value of the useState and not to have a setState
    const moveBall = () => {
        Animated.timing(bottomValue, {
            toValue: 200, // the place of the ball where going to
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    const resetBall = () => {
        Animated.timing(bottomValue, {
            toValue: 0,
            useNativeDriver: false,
        }).reset();
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    backgroundColor: "cyan",
                    marginBottom: bottomValue,
                }}
            ></Animated.View>
            <TouchableOpacity style={styles.btn} onPress={moveBall}>
                <Text>Press Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={resetBall}>
                <Text>RESET</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "coral",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default AnimatedValue;
