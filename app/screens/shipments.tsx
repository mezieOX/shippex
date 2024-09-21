import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Cards,
  HeaderSection,
  Input,
  ListItemSeparator,
  ModalComp,
  Navbar,
} from "../../components";
import { colors } from "../../config";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FILTER_OPTIONS, SHIPMENTS } from "../../data";

interface IShipment {
  id: number;
  title: string;
  trackingNumber: number;
  status: string;
  sender: string;
  receiver: string;
}

export const ShipmentsScreen: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [openModal, setModalOpen] = useState<boolean>(false);
  const [filteredValues, setFilteredValues] = useState<string[]>([]);
  const [filteredListItemResult, setFilteredListItemResult] = useState<
    IShipment[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Filter shipments based on the selected filters
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const result = SHIPMENTS.filter(
        (item) => filteredValues.includes(item.status) // Filter by shipment status
      );
      setFilteredListItemResult(result);
      setLoading(false);
    }, 2000);
  };

  // Search and filter shipments based on the search text input
  useEffect(() => {
    const result = SHIPMENTS.filter(
      (item) =>
        item.status.toLowerCase().includes(text.toLowerCase()) ||
        item.title.toLowerCase().includes(text.toLowerCase()) // Filter by shipment status or title
    );
    setFilteredListItemResult(result);
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.welcome}>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.userName}>Ibrahim Shaker</Text>
      </View>
      <Input placeholder="Search" text={text} setText={setText} />
      <View style={styles.filterAndAddScanSection}>
        <Button
          styling={{ width: "48%", backgroundColor: colors.gray }}
          textStyling={{ color: colors.boldGray }}
          title="Filters"
          iconName="filter-sharp"
          iconColor="#000"
          onPress={() => setModalOpen((prev) => !prev)}
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
        title="Shipments"
      />
      <ScrollView>
        {loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={
              filteredListItemResult.length ? filteredListItemResult : SHIPMENTS
            }
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
            renderItem={({ item }) => (
              <Cards
                checked={checked}
                setChecked={setChecked}
                data={item as any}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        )}
      </ScrollView>
      <ModalComp
        isVisible={openModal}
        handleSubmit={handleSubmit}
        onClose={() => setModalOpen(false)}
      >
        <View style={styles.filterContainer}>
          <Text style={styles.filterTitle}>SHIPMENT STATUS</Text>
          <View style={styles.filterStatusContainer}>
            {FILTER_OPTIONS.map(({ id, text }) => (
              <TouchableOpacity
                key={id}
                onPress={() =>
                  filteredValues.includes(text)
                    ? setFilteredValues(
                        filteredValues.filter((item) => item !== text)
                      )
                    : setFilteredValues((prev) => [...prev, text])
                }
              >
                <View
                  style={[
                    styles.statusContainer,
                    {
                      borderWidth: filteredValues.includes(text) ? 1 : 0,
                      borderColor: filteredValues.includes(text)
                        ? colors.primary
                        : colors.white,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.status,
                      {
                        color: filteredValues.includes(text)
                          ? colors.primary
                          : colors.black,
                      },
                    ]}
                  >
                    {text}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ModalComp>
    </SafeAreaView>
  );
};

// Styles for the component
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
  filterContainer: {
    padding: 12,
  },
  filterTitle: {
    paddingVertical: 4,
    paddingBottom: 20,
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: colors.gray,
  },
  status: {
    paddingVertical: 8,
    textAlign: "center",
    color: colors.black,
    paddingHorizontal: 20,
  },
  filterStatusContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
