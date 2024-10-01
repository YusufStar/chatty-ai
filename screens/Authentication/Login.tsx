import { global } from "@/constants/Globals";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeft } from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import { textStyles } from "@/constants/Typography";

const LoginScreen = () => {
  const { dark } = useTheme();
  const styles = StyleSheet.create({
    formContainer: {
      padding: 20,
      paddingTop: 16,
      paddingBottom: 16,
      flexDirection: "column",
      gap: 32,
      display: "flex",
      flex: 1,
      width: "100%",
    },
    button: {
      padding: 10,
      paddingLeft: 0,
    },
  });

  return (
    <View style={global.container}>
      <View style={styles.formContainer}>
        <TouchableOpacity activeOpacity={0.75} style={styles.button}>
          <ArrowLeft
            stroke="regular"
            primaryColor={dark ? "#fff" : "#212121"}
            size={28}
          />
        </TouchableOpacity>

        <View style={{ gap: 16, display: "flex", flexDirection: "column" }}>
          <Text
            className="text-[#212121] dark:text-white"
            style={textStyles.h3Bold}
          >
            Hello there 👋
          </Text>
          <Text
            className="text-[#212121] dark:text-white"
            style={textStyles.bodyXlargeRegular}
          >
            Please enter your email & password to create an account.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
