import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyCheckbox } from "./checkbox";
import { colors } from "../config";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ICardData {
  data: {
    id: number;
    title: string;
    trackingNumber: string;
    status: string;
    sender: string;
    receiver: string;
  };
  checked: boolean;
  setChecked: (value: boolean) => void;
}

// Cards component to display shipment data
export const Cards: React.FC<ICardData> = ({ data, checked, setChecked }) => {
  const [ticked, setTicked] = useState<boolean>(false);
  const [finalChecked, setFinalChecked] = useState(checked || ticked);

  // Update finalChecked whenever checked or ticked changes
  useEffect(() => {
    setFinalChecked(ticked || checked);
  }, [checked, ticked]);

  const handleTickedChange = () => {
    setTicked((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Checkbox */}
      <MyCheckbox
        buttonStyle={{
          backgroundColor: finalChecked ? colors.lightBlue : colors.white,
        }}
        checked={finalChecked}
        onChange={handleTickedChange}
      />

      {/* Shipment image */}
      <Image
        style={styles.image}
        source={require("../assets/images/shipment.png")}
      />

      {/* Shipment info */}
      <View>
        <Text>{data.title}</Text>
        <Text style={styles.trackingNumber}>{data.trackingNumber}</Text>
        <View style={styles.fromTo}>
          <Text>{data.sender}</Text>
          <AntDesign name="arrowright" size={16} color={colors.primary} />
          <Text>{data.receiver}</Text>
        </View>
      </View>

      {/* Shipment status */}
      <Text
        style={[
          styles.status,
          {
            color:
              data.status === "Received"
                ? colors.primary
                : data.status === "on hold"
                ? colors.yellow
                : data.status === "error"
                ? colors.warning
                : data.status === "delivered"
                ? colors.green
                : colors.black,
            backgroundColor:
              data.status === "Received"
                ? colors.lightBlue
                : data.status === "on hold"
                ? colors.lightYellow
                : data.status === "error"
                ? colors.lightWarning
                : data.status === "delivered"
                ? colors.lightGreen
                : colors.transparent,
          },
        ]}
      >
        {data.status}
      </Text>

      {/* Icon button */}
      <TouchableOpacity
        style={[
          styles.icon,
          {
            backgroundColor: finalChecked ? colors.mediumBlue : colors.white,
            borderWidth: finalChecked ? 2 : 0,
            padding: finalChecked ? 4 : 6,
            borderColor: finalChecked ? colors.lightBlue : colors.white,
          },
        ]}
      >
        <AntDesign
          name="arrowsalt"
          size={16}
          color={finalChecked ? colors.white : colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

// Styles for Cards component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    borderRadius: 8,
    backgroundColor: colors.gray,
    paddingHorizontal: 20,
    minHeight: 80,
  },
  image: {
    width: 40,
    height: 40,
  },
  fromTo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  trackingNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: colors.white,
    padding: 6,
    borderRadius: 6,
  },
  icon: {
    borderRadius: 50,
  },
});
