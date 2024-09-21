import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "../config";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Navbar = () => {
  return (
    <View style={styles.container}>
      {/* User Image */}
      <Image
        resizeMode="contain"
        style={styles.userImg}
        source={require("../assets/images/user-img.jpg")}
      />

      {/* Logo */}
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../assets/images/logo/logo.jpg")}
      />

      {/* Notification Icon */}
      <TouchableOpacity style={styles.notificationContainer}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal alignment
    alignItems: "center", // Align items vertically
    justifyContent: "space-between", // Space between items
  },
  userImg: {
    height: 50, // User image size
    width: 50,
    borderRadius: 25, // Rounded user image
  },
  logo: {
    height: 20, // Logo size
    width: 140,
  },
  notificationContainer: {
    backgroundColor: colors.gray, // Background for notification icon
    borderRadius: 50, // Rounded background
    padding: 8, // Space around the icon
  },
});
