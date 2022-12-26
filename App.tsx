import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedValue from "./components/AnimatedValue";
import BasicAnimation from "./components/reactNativeReanimatedLibrary/BasicAnimation";
import BasicHandlerGesture from "./components/reactNativeReanimatedLibrary/BasicHandlerGesture";
import SimpleAnimation from "./components/SimpleAnimation";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <SimpleAnimation /> */}
            {/* <AnimatedValue /> */}
            {/* <BasicAnimation /> */}
            <GestureHandlerRootView style={{ flex: 1 }}>
                <BasicHandlerGesture />
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
