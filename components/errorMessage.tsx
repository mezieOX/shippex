import React from "react";
import { Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
  error?: string | null;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});
