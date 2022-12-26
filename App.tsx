import { StyleSheet, Text, View } from "react-native";
// import AnimatedValue from "./components/AnimatedValue";
import BasicAnimation from "./components/reactNativeReanimatedLibrary/BasicAnimation";
// import SimpleAnimation from "./components/SimpleAnimation";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <SimpleAnimation /> */}
            {/* <AnimatedValue /> */}
            <BasicAnimation />
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
