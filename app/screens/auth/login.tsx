import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config";
import { Button, ErrorMessage, Input, ModalComp } from "../../../components";
import { Formik } from "formik";
import { validationSchema } from "./login-validation";

interface LoginScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [openModal, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
          onPress={() => setModalOpen(true)}
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
        handleSubmit={() => {}}
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
          <Formik
            initialValues={{ url: "", email: "", password: "" }}
            onSubmit={(values) => {
              setLoading(true);
              setTimeout(() => {
                navigation.navigate("Main");
                setLoading(false);
              }, 1000);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, values }) => (
              <>
                <View style={styles.inputWrapper}>
                  <Input
                    text={values.url}
                    placeholder="URL"
                    setText={handleChange("url")}
                    styling={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      height: 60,
                      paddingBottom: values.url ? 8 : 0,
                    }}
                  />
                  <ErrorMessage error={errors.url} />
                  <Input
                    text={values.email}
                    placeholder="Username / Email"
                    setText={handleChange("email")}
                    styling={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      height: 60,
                      paddingBottom: values.email ? 8 : 0,
                    }}
                  />
                  <ErrorMessage error={errors.email} />
                  <Input
                    text={values.password}
                    placeholder="Password"
                    setText={handleChange("password")}
                    secureTextEntry
                    styling={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      height: 60,
                      paddingBottom: values.password ? 8 : 0,
                    }}
                  />
                  <ErrorMessage error={errors.password} />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title="Login"
                    onPress={handleSubmit}
                    loading={loading}
                    styling={{
                      backgroundColor:
                        errors.email || errors.password || !values.url.length
                          ? colors.lightGray
                          : colors.primary,
                      borderRadius: 8,
                      marginHorizontal: 12,
                    }}
                    textStyling={{
                      color:
                        errors.email || errors.password || !values.url.length
                          ? colors.darkGray
                          : colors.white,
                      fontWeight: "bold",
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
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
    paddingTop: 16,
    color: colors.darkerGray,
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "column",
    gap: 20,
    marginVertical: 40,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
});
