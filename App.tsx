import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import {
  Button,
  Cards,
  HeaderSection,
  Input,
  ListItemSeparator,
  Navbar,
} from "./components";
import { colors } from "./config";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { shipments } from "./data";
import { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.welcome}>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.userName}>Ibrahim Shaker</Text>
      </View>
      <Input placeholder="Search" />
      <View style={styles.filterAndAddScanSection}>
        <Button
          styling={{ width: "48%", backgroundColor: colors.gray }}
          textStyling={{ color: colors.boldGray }}
          title="Filters"
          iconName="filter-sharp"
          iconColor="#000"
          Icon={Ionicons}
        />
        <Button
          Icon={MaterialCommunityIcons}
          iconName="line-scan"
          styling={{ width: "48%" }}
          title="Add Scan"
        />
      </View>
      <HeaderSection
        checked={checked}
        setChecked={setChecked}
        title={"Shipments"}
      />
      <ScrollView>
        <FlatList
          data={shipments}
          keyExtractor={(data) => data.id.toString()}
          style={styles.list}
          renderItem={({ item }) => (
            <Cards checked={checked} setChecked={setChecked} data={item} />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </ScrollView>
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
  title: {
    fontSize: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterAndAddScanSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 24,
  },
  list: {},
});
