import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyCheckbox } from "./checkbox";
import { colors } from "../config";

// Define the prop types for better type safety
interface HeaderSectionProps {
  title: string;
  checked: boolean;
  setChecked: (value: boolean) => void; // Accepts a boolean parameter
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  checked,
  setChecked,
}) => {
  const handleCheckboxChange = () => {
    setChecked(!checked); // Toggle the checked state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.markAll}>
        <MyCheckbox checked={checked} onChange={handleCheckboxChange} />
        <Text style={styles.text}>Mark All</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
  markAll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});
