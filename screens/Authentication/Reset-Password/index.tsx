import { FormInput } from "@/components/ui/input/form-input";
import { global } from "@/constants/Globals";
import { textStyles } from "@/constants/Typography";
import { ArrowLeft, Message } from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const ResetPasswordScreen = (props: Props) => {
  const [email, setEmail] = useState("");
  const { dark } = useTheme();
  const styles = StyleSheet.create({
    formContainer: {
      padding: 20,
      paddingTop: 16,
      paddingBottom: 16,
      flexDirection: "column",
      gap: 24,
      display: "flex",
      flex: 1,
      width: "100%",
    },
    button: {
      padding: 10,
      paddingLeft: 0,
    },
    actionButton: {
      width: "100%",
      height: 65,
      borderRadius: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nextShadow: {
      shadowColor: "rgba(23, 206, 146, 1)", // Gölgenin rengi (alpha 1 olacak şekilde ayarladım)
      shadowOffset: {
        width: 4, // X eksenindeki kayma
        height: 8, // Y eksenindeki kayma
      },
      shadowOpacity: 0.25, // Renk opaklığı (gölgenin transparanlık seviyesi)
      shadowRadius: 12, // Gölgenin yayılma yarıçapı
      elevation: 12, // Android için ek olarak elevation ayarı
    },
  });

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-200}
      style={global.container}
    >
      <ScrollView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: Dimensions.get("window").height,
          }}
        >
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
                Reset your password 🔑
              </Text>
              <Text
                className="text-[#212121] dark:text-white"
                style={textStyles.bodyXlargeRegular}
              >
                Please enter your email and we will send an OTP code in the next
                step to reset your password.
              </Text>
            </View>

            <FormInput
              label="Email"
              placeholder="Email"
              value={email}
              onChange={(value) => setEmail(value)}
              type="email"
              iconPosition="right"
              icon={
                <Message stroke="regular" set="bold" primaryColor="#9E9E9E" />
              }
            />
          </View>

          <View
            style={{
              width: Dimensions.get("window").width,
              padding: 24,
              paddingBottom: 36,
              display: "flex",
              borderTopWidth: 1,
              borderTopColor: "#35383F",
              marginTop: "auto",
            }}
          >
            <TouchableOpacity
              disabled={!email || email === ""}
              activeOpacity={0.75}
              className="bg-[#17CE92]"
              style={[
                styles.actionButton,
                !!email && email !== "" && styles.nextShadow,
              ]}
            >
              <Text className="text-white" style={textStyles.bodyXlargeBold}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;
