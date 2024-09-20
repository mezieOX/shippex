import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
} from "react-native";
import { Navbar } from "./components";
import { colors } from "./config";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.welcome}>
        <Text style={styles.welcomeMsg}>Hello,</Text>
        <Text style={styles.userName}>Ibrahim Shaker</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcome: {
    paddingVertical: 20,
  },
  welcomeMsg: {
    fontSize: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
