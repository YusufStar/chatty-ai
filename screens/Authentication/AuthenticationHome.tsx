import CustomLogo from "@/components/ui/logo/CustomLogo";
import { global } from "@/constants/Globals";
import { textStyles } from "@/constants/Typography";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoogleIcon from "./Google.svg";
import AppleIcon from "./Apple.svg";
import FacebookIcon from "./Facebook.svg";

const AuthenticationHome = () => {
  const styles = StyleSheet.create({
    textContainer: {
      display: "flex",
      flexDirection: "column",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 24,
      width: "100%",
    },
    button: {
      width: "100%",
      height: 65,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9999,
    },
    customShadow: {
      shadowColor: "rgba(23, 206, 146, 1)", // Gölgenin rengi (alpha 1 olacak şekilde ayarladım)
      shadowOffset: {
        width: 4, // X eksenindeki kayma
        height: 8, // Y eksenindeki kayma
      },
      shadowOpacity: 0.25, // Renk opaklığı (gölgenin transparanlık seviyesi)
      shadowRadius: 12, // Gölgenin yayılma yarıçapı
      elevation: 12, // Android için ek olarak elevation ayarı
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
    },
    dividerLine: {
      flex: 1,
      height: 1,
    },
    socialLoginContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      width: "100%",
    },
    socialLoginButton: {
      flex: 1,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9999,
    },
  });

  return (
    <View
      style={[
        global.container,
        {
          flexDirection: "column",
          justifyContent: "space-between",
          paddingVertical: 60,
          paddingHorizontal: 24,
        },
      ]}
    >
      <CustomLogo variant="Logo Default" width={140} height={140} />

      <View style={styles.textContainer}>
        <Text
          className="text-[#212121] dark:text-white"
          style={textStyles.h2Bold}
        >
          Welcome to
        </Text>
        <Text className="text-[#17CE92]" style={textStyles.h2Bold}>
          ChattyAI 👋
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          className="bg-[#17CE92]"
          style={[styles.button, styles.customShadow]}
          activeOpacity={0.75}
        >
          <Text className="text-white" style={textStyles.bodyXlargeBold}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#E8FAF4] dark:bg-dark-4"
          style={styles.button}
          activeOpacity={0.75}
        >
          <Text
            className="text-[#17CE92] dark:text-white"
            style={textStyles.bodyXlargeBold}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 24,
        }}
      >
        <View style={styles.divider}>
          <View
            className="bg-[#EEEEEE] dark:bg-dark-4"
            style={styles.dividerLine}
          />
          <Text
            className="text-[#616161] dark:text-[#E0E0E0] bg-white dark:bg-dark-1 px-3"
            style={[textStyles.h6Medium]}
          >
            or continue with
          </Text>
          <View
            className="bg-[#EEEEEE] dark:bg-dark-4"
            style={styles.dividerLine}
          />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            className="border border-[#DDDDDD]/80 dark:border-[#35383F] bg-white dark:bg-dark-2"
            style={styles.socialLoginButton}
          >
            <GoogleIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-[#DDDDDD]/80 dark:border-[#35383F] bg-white dark:bg-dark-2"
            style={styles.socialLoginButton}
          >
            <AppleIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-[#DDDDDD]/80 dark:border-[#35383F] bg-white dark:bg-dark-2"
            style={styles.socialLoginButton}
          >
            <FacebookIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthenticationHome;
