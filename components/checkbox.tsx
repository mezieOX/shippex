import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config";

interface ICheckbox {
  checked: boolean;
  onChange: (value: boolean) => void;
  buttonStyle?: object;
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
        checked ? styles.checkboxChecked : null,
        buttonStyle,
      ]}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark-sharp" size={13} color={colors.primary} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 18,
    height: 18,
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
