import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { MyCheckbox } from "./checkbox";
import { colors } from "../config";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button } from "./button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ICardData {
  data: {
    id: number;
    title: string;
    trackingNumber: string;
    status: string;
    sender: string;
    receiver: string;
  };
  checked: boolean;
  setChecked: (value: boolean) => void;
}

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const Cards: React.FC<ICardData> = ({ data, checked }) => {
  const [ticked, setTicked] = useState<boolean>(false);
  const [finalChecked, setFinalChecked] = useState(checked || ticked);
  const animation = useRef(new Animated.Value(0)).current;
  const dropdownHeightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setFinalChecked(ticked || checked);
  }, [checked, ticked]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: finalChecked ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(dropdownHeightAnim, {
      toValue: finalChecked ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [finalChecked]);

  const handleTickedChange = () => {
    setTicked((prev) => !prev);
  };

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  const dropdownHeight = dropdownHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 140],
  });

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderBottomRightRadius: finalChecked ? 0 : 8,
            borderBottomLeftRadius: finalChecked ? 0 : 8,
          },
        ]}
      >
        <MyCheckbox
          buttonStyle={{
            backgroundColor: finalChecked ? colors.lightBlue : colors.white,
          }}
          checked={finalChecked}
          onChange={handleTickedChange}
        />
        <Image
          style={styles.image}
          source={require("../assets/images/shipment.png")}
        />
        <View>
          <Text>{data.title}</Text>
          <Text style={styles.trackingNumber}>{data.trackingNumber}</Text>
          <View style={styles.fromTo}>
            <Text>{data.sender}</Text>
            <AntDesign name="arrowright" size={16} color={colors.primary} />
            <Text>{data.receiver}</Text>
          </View>
        </View>
        <Text
          style={[
            styles.status,
            {
              color:
                data.status === "Received"
                  ? colors.primary
                  : data.status === "On Hold"
                  ? colors.yellow
                  : data.status === "Error"
                  ? colors.warning
                  : data.status === "Delivered"
                  ? colors.green
                  : colors.black,
              backgroundColor:
                data.status === "Received"
                  ? colors.lightBlue
                  : data.status === "On Hold"
                  ? colors.lightYellow
                  : data.status === "Error"
                  ? colors.lightWarning
                  : data.status === "Delivered"
                  ? colors.lightGreen
                  : colors.transparent,
            },
          ]}
        >
          {data.status}
        </Text>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            style={[
              styles.icon,
              {
                backgroundColor: finalChecked
                  ? colors.mediumBlue
                  : colors.white,
                borderWidth: finalChecked ? 2 : 0,
                padding: finalChecked ? 4 : 6,
                borderColor: finalChecked ? colors.lightBlue : colors.white,
              },
            ]}
          >
            <AntDesign
              name="arrowsalt"
              size={14}
              color={finalChecked ? colors.white : colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.dropdown,
          {
            height: dropdownHeight,
            overflow: "hidden",
            paddingVertical: finalChecked ? 12 : 0,
          },
        ]}
      >
        <View style={styles.dropdownFromToInfo}>
          <View>
            <Text style={styles.title}>Origin</Text>
            <Text style={styles.name}>Cairo</Text>
            <Text style={styles.address}>Dokki, 22 Nile St.</Text>
          </View>
          <AntDesign name="arrowright" size={24} color={colors.primary} />
          <View>
            <Text style={styles.title}>Destination</Text>
            <Text style={styles.name}>Alexandria</Text>
            <Text style={styles.address}>Smoha, 22 max St.</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Call"
            iconColor={colors.white}
            iconName="call"
            styling={{
              width: "30%",
              backgroundColor: colors.mediumBlue,
              paddingVertical: 9,
              borderRadius: 8,
            }}
            iconSize={20}
            Icon={MaterialIcons}
          />
          <Button
            title="WhatsApp"
            iconColor={colors.white}
            iconName="whatsapp"
            styling={{
              width: "40%",
              backgroundColor: colors.darkGreen,
              paddingVertical: 9,
              borderRadius: 8,
            }}
            iconSize={20}
            Icon={FontAwesome}
          />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderRadius: 8,
    backgroundColor: colors.gray,
    paddingHorizontal: 14,
    minHeight: 80,
  },
  image: {
    width: 30,
    height: 30,
  },
  fromTo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  trackingNumber: {
    fontSize: 17,
    fontWeight: "bold",
  },
  status: {
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 12,
    padding: 6,
    borderRadius: 6,
  },
  icon: {
    borderRadius: 50,
  },
  dropdown: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#f4f2f888",
    paddingHorizontal: 14,
  },
  dropdownFromToInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
  title: {
    color: colors.primary,
  },
  name: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 16,
  },
  address: {
    color: colors.black,
  },
});
