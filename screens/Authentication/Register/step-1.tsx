import FormInput from "@/components/ui/input/form-input";
import { global } from "@/constants/Globals";
import { textStyles } from "@/constants/Typography";
import { ArrowLeft } from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import GoogleIcon from "../Google.svg";
import AppleIcon from "../Apple.svg";
import FacebookIcon from "../Facebook.svg";
import AvatarUpload from "@/components/ui/upload/avatar-upload";

type Props = {};

const RegisterStepOne = (props: Props) => {
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
              Complete your profile 📋
            </Text>
            <Text
              className="text-[#212121] dark:text-white"
              style={textStyles.bodyXlargeRegular}
            >
              Please enter your profile. Don't worry, only you can see your
              personal data. No one else will be able to see it. Or you can skip
              it for now.
            </Text>
          </View>

          <AvatarUpload uploadable size={120} name="John Doe" />

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
              style={{
                width: 32,
                height: 32,
              }}
            >
              <AnimatedCheckbox
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterStepOne;
