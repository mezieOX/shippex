import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config";
import { Button, Input, ModalComp } from "../../../components";

export const LoginScreen = ({ navigation }) => {
  const [openModal, setModalOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState({
    url: "",
    email: "",
    password: "",
  });

  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assets/images/logo/auth-logo.png")}
        />
        <Button
          title="Login"
          onPress={() => setModalOpen((prev) => !prev)}
          styling={{
            backgroundColor: colors.white,
            borderRadius: 8,
            position: "absolute",
            bottom: 40,
          }}
          textStyling={{ color: colors.primary, fontWeight: "bold" }}
        />
      </View>
      <ModalComp
        isVisible={openModal}
        onClose={() => setModalOpen(false)}
        modalContentProps={{ height: "95%" }}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.description}>
            Please enter your First, Last name and your phone number in order to
            register
          </Text>
          <View style={styles.inputWrapper}>
            <Input
              placeholder="Email"
              text={`${userInput.url}`}
              setText={(text) =>
                setUserInput((props) => ({
                  ...props,
                  url: text,
                }))
              }
              styling={{
                flexDirection: "column",
                alignItems: "flex-start",
                height: 60,
                paddingBottom: userInput?.url.length ? 8 : 0,
              }}
            />
            <Input
              placeholder="Username / Email"
              text={userInput.email}
              setText={(text) =>
                setUserInput((props) => ({
                  ...props,
                  email: text,
                }))
              }
              styling={{
                flexDirection: "column",
                alignItems: "flex-start",
                height: 60,
                paddingBottom: userInput?.email.length ? 8 : 0,
              }}
            />
            <Input
              placeholder="Password"
              setText={(text) =>
                setUserInput((props) => ({
                  ...props,
                  password: text,
                }))
              }
              secureTextEntry
              styling={{
                flexDirection: "column",
                alignItems: "flex-start",
                height: 60,
                paddingBottom: userInput?.password.length ? 8 : 0,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 40,
              width: "100%",
              marginHorizontal: 12,
            }}
          >
            <Button
              title="Login"
              onPress={() => navigation.navigate("Shipments")}
              styling={{
                backgroundColor: userInput.url.length
                  ? colors.primary
                  : colors.lighterGray,
                borderRadius: 8,
                bottom: 0,
              }}
              textStyling={{
                color: userInput.url.length ? colors.white : colors.darkGray,
                fontWeight: "bold",
              }}
            />
          </View>
        </View>
      </ModalComp>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
  },
  image: {
    width: "60%",
    height: 180,
  },
  modal: {
    paddingHorizontal: 12,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.black,
  },
  description: {
    paddingVertical: 16,
    color: colors.darkerGray,
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "column",
    gap: 20,
    marginVertical: 40,
  },
});
