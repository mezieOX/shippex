import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../config";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface IInput {
  styling?: ViewStyle | ViewStyle[];
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ styling, placeholder }) => {
  const [focus, setFocus] = useState(false);
  const borderWidthAnim = useRef(new Animated.Value(0)).current; // Animated value for border width

  useEffect(() => {
    // Animate the border width when focus changes
    Animated.timing(borderWidthAnim, {
      toValue: focus ? 1 : 0, // Animate to 1 when focused, 0 when blurred
      duration: 300, // Animation duration
      useNativeDriver: false, // We are animating style props, so native driver is not needed
    }).start();
  }, [focus]);

  return (
    <Animated.View // Use Animated.View for animating styles
      style={[
        styles.container,
        { borderWidth: borderWidthAnim }, // Bind animated borderWidth value
        styling,
      ]}
    >
      <Feather
        name="search"
        size={24}
        color={focus ? colors.primary : colors.darkGray}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        cursorColor={colors.primary}
        placeholderTextColor={colors.darkGray}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} // Revert border change when blurred
      />
      {focus ? (
        <TouchableOpacity>
          <MaterialIcons name="clear" size={24} color={colors.primary} />
        </TouchableOpacity>
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.gray,
    borderColor: colors.primary, // Border color remains constant
    borderRadius: 8,
    height: 50,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: colors.primary,
  },
});
