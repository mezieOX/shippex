import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";

import { colors } from "../config";

// Define prop types using more specific types for styles and icons
interface IButton {
  title: string;
  styling?: ViewStyle | ViewStyle[];
  iconColor?: string;
  iconSize?: number;
  textStyling?: TextStyle | TextStyle[];
  Icon?: React.ComponentType<any>; // Icon component type
  iconName?: string;
  onPress?: () => void;
  loading?: boolean;
}

export const Button: React.FC<IButton> = ({
  title,
  styling,
  iconColor = colors.white,
  iconSize = 24,
  textStyling,
  Icon,
  iconName,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styling]}>
      {loading ? (
        <ActivityIndicator size={"small"} color={colors.white} />
      ) : (
        <>
          {Icon && iconName && (
            <Icon name={iconName} size={iconSize} color={iconColor} />
          )}
          <Text style={[styles.text, textStyling]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

// Styles for the button and text
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 12,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
