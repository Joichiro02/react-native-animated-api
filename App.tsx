import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SimpleAnimation from "./components/SimpleAnimation";

export default function App() {
    return (
        <View style={styles.container}>
            <SimpleAnimation />
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
