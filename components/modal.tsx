import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
} from "react-native";
import { colors } from "../config";

interface ModalCompProps {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
  handleSubmit: () => void;
}

export const ModalComp: React.FC<ModalCompProps> = ({
  isVisible,
  children,
  onClose,
  handleSubmit,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.modalContent]}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.title, { color: colors.primary }]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View>
              <View style={styles.modalLine} />
              <Text style={styles.title}>Filters</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
                onClose();
              }}
            >
              <Text style={[styles.title, { color: colors.primary }]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "#00000078",
    zIndex: 200,
    position: "absolute",
    bottom: 0,
    top: 0,
  },
  modalLine: {
    height: 4,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: colors.darkGray,
    position: "absolute",
    top: -14,
  },
  modalContent: {
    height: "40%",
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "20%",
    backgroundColor: colors.white,
    borderBottomColor: colors.lighterGray,
    borderBottomWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
});
