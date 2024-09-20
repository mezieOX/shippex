import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config";

interface ICheckbox {
  checked: boolean;
  onChange: (value: boolean) => void;
  buttonStyle?: object; // Define the optional prop for custom styles
}

export const MyCheckbox: React.FC<ICheckbox> = ({
  checked,
  onChange,
  buttonStyle = {},
}) => {
  return (
    <Pressable
      style={[
        styles.checkboxBase,
        checked ? styles.checkboxChecked : null, // Apply checked style conditionally
        buttonStyle, // Allow custom button styles to be applied last
      ]}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark-sharp" size={18} color={colors.primary} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 23,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.lightGray,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.primary,
  },
});
