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

const OtpScreen = (props: Props) => {
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
              OTP code verification 🔐
            </Text>
            <Text
              className="text-[#212121] dark:text-white"
              style={textStyles.bodyXlargeRegular}
            >
              We have sent an OTP code to your email
              and********ley@yourdomain.com. Enter the OTP code below to verify.
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            paddingTop: 64,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  paddingVertical: 16,
                  backgroundColor: "#35383F",
                  borderWidth: 1,
                  borderColor: "#1F222A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Text className="text-white" style={textStyles.h4Bold}>
                  {index}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              className="text-[#212121] dark:text-[#fff]"
              style={[textStyles.bodyLargeMedium, { textAlign: "center" }]}
            >
              Didn't receive email?
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                className="text-[#212121] dark:text-[#fff]"
                style={textStyles.bodyLargeMedium}
              >
                You can resend code in
              </Text>
              <Text style={[textStyles.bodyLargeBold, { color: "#17CE92" }]}>
                55
              </Text>
              <Text
                className="text-[#212121] dark:text-[#fff]"
                style={textStyles.bodyLargeMedium}
              >
                s
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
