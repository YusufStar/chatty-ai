import { global } from "@/constants/Globals";
import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeft, Hide, Message } from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import { textStyles } from "@/constants/Typography";
import FormInput from "@/components/ui/input/form-input";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import GoogleIcon from "../Google.svg";
import AppleIcon from "../Apple.svg";
import FacebookIcon from "../Facebook.svg";

const RegisterScreen = () => {
  /* States */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxPress = () => {
    setChecked((prev) => {
      return !prev;
    });
  };

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
      maxHeight: Dimensions.get("window").height,
    },
    button: {
      padding: 10,
      paddingLeft: 0,
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

  const handleLogin = () => {
    console.log({
      email,
      password,
      checked,
    });
  };

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
              Hello there 👋
            </Text>
            <Text
              className="text-[#212121] dark:text-white"
              style={textStyles.bodyXlargeRegular}
            >
              Please enter your email & password to create an account.
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
              <Message
                stroke="regular"
                set="bold"
                primaryColor="#9E9E9E"
                size={28}
              />
            }
          />
          <FormInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(value) => setPassword(value)}
            type="password"
            iconPosition="right"
            icon={
              <Hide
                stroke="regular"
                set="bold"
                primaryColor="#17CE92"
                size={28}
              />
            }
          />

          {/* Terms and Policy */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={handleCheckboxPress}
              style={{
                width: 32,
                height: 32,
              }}
            >
              <AnimatedCheckbox
                checked={checked}
                highlightColor="#fff"
                checkmarkColor="#000"
                boxOutlineColor="#17CE92"
                // @ts-ignore
                dark={dark}
              />
            </Pressable>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              <Text
                className="text-[#212121] dark:text-[#fff]"
                style={textStyles.bodyLargeSemiBold}
              >
                I agree to ChattyAI
              </Text>
              <Text
                className="text-[#17CE92]"
                style={textStyles.bodyLargeSemiBold}
              >
                Public Agreement, Terms, & Privacy Policy.
              </Text>
            </View>
          </View>

          <View
            className="bg-[#EEEEEE] dark:bg-dark-4"
            style={{
              width: "100%",
              height: 1,
            }}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              className="text-[#212121] dark:text-[#fff]"
              style={textStyles.bodyLargeMedium}
            >
              Already have an account?
            </Text>
            <Text style={[textStyles.bodyLargeBold, { color: "#17CE92" }]}>
              Log in
            </Text>
          </View>

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

          <View
            className="bg-[#EEEEEE] dark:bg-dark-4"
            style={{
              width: "100%",
              height: 1,
            }}
          />
        </View>

        <View
          style={{
            width: Dimensions.get("window").width,
            padding: 24,
            paddingBottom: 36,
            display: "flex",
          }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            disabled={!checked || !email || !password}
            activeOpacity={0.75}
            className="bg-[#17CE92]"
            style={[
              styles.actionButton,
              checked && !!email && !!password && styles.nextShadow,
            ]}
          >
            <Text className="text-white" style={textStyles.bodyXlargeBold}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
