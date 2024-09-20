import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../config";

// Define types for the styling props
interface IInput {
  styling?: ViewStyle | ViewStyle[];
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ styling, placeholder }) => {
  return (
    <View style={[styles.container, styling]}>
      <Feather name="search" size={24} color={colors.darkGray} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        cursorColor={colors.primary}
        placeholderTextColor={colors.darkGray}
      />
    </View>
  );
};

// Styles for the container and input
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.gray,
    borderRadius: 8,
    height: 50,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: colors.darkGray,
  },
});
