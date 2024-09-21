import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../config";

interface IInput {
  styling?: ViewStyle | ViewStyle[];
  placeholder?: string;
  text: string;
  setText: (text: string) => void;
}

export const Input: React.FC<IInput> = ({
  styling,
  placeholder,
  text,
  setText,
}) => {
  const [focus, setFocus] = useState(false);
  const borderWidthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(borderWidthAnim, {
      toValue: focus ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [focus]);

  return (
    <Animated.View
      style={[styles.container, { borderWidth: borderWidthAnim }, styling]}
    >
      <Feather
        name="search"
        size={24}
        color={focus ? colors.primary : colors.darkGray}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        cursorColor={colors.primary}
        placeholderTextColor={colors.darkGray}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {focus && text.length > 0 && (
        <TouchableOpacity onPress={() => setText("")}>
          <MaterialIcons name="clear" size={24} color={colors.primary} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.gray,
    borderColor: colors.primary,
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
