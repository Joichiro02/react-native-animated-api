import React, { useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SimpleAnimation = () => {
    const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]; //initail position of the ball
    const moveBall = () => {
        Animated.timing(value, {
            toValue: { x: 0, y: -200 }, // the place of the ball where going to
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    const resetBall = () => {
        Animated.timing(value, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
        }).reset();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={value.getLayout()}>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        backgroundColor: "cyan",
                    }}
                ></View>
            </Animated.View>
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

export default SimpleAnimation;
