import { textStyles } from "@/constants/Typography";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Props = {
  variant: "register" | "login";
  promise: boolean;
  success: boolean;
  Illustration: React.ReactNode;
};

const FetchDialog = (props: Props) => {
  const { dark } = useTheme();

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut.duration(1000)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.78)",
      }}
    >
      {props.variant === "register" && (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "75%",
            maxHeight: "75%",
            width: "100%",
            borderRadius: 16,
            padding: 24,
            gap: 32,
          }}
          className="bg-white dark:bg-[#1F222A]"
        >
          {props.Illustration}

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.success ? (
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text className="text-[#17CE92]" style={[textStyles.h4Bold]}>
                  Sign up Successful!
                </Text>
                <Text
                  className="text-[#212121] dark:text-[#fff]"
                  style={[textStyles.bodyLargeRegular]}
                >
                  You will be directed to the homepage.
                </Text>
              </Animated.View>
            ) : (
              <Text
                className="text-[#212121] dark:text-[#fff]"
                style={[textStyles.bodyLargeRegular]}
              >
                Please wait...
              </Text>
            )}
          </View>

          {props.promise && <ActivityIndicator size="large" color="#17CE92" />}
        </View>
      )}

      {props.variant === "login" && (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "75%",
            maxHeight: "75%",
            width: "100%",
            borderRadius: 16,
            padding: 24,
            gap: 32,
          }}
          className="bg-white dark:bg-[#1F222A]"
        >
          {props.Illustration}

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.success ? (
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text className="text-[#17CE92]" style={[textStyles.h4Bold]}>
                  Log in Successful!
                </Text>
                <Text
                  className="text-[#212121] dark:text-[#fff]"
                  style={[textStyles.bodyLargeRegular]}
                >
                  You will be directed to the homepage.
                </Text>
              </Animated.View>
            ) : (
              <Text
                className="text-[#212121] dark:text-[#fff]"
                style={[textStyles.bodyLargeRegular]}
              >
                Please wait...
              </Text>
            )}
          </View>

          {props.promise && <ActivityIndicator size="large" color="#17CE92" />}
        </View>
      )}
    </Animated.View>
  );
};

export default FetchDialog;
