import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../config";

export const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Scan Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
