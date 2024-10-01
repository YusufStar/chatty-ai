import React from "react";
import CustomLogo from "@/components/ui/logo/CustomLogo";
import { textStyles } from "@/constants/Typography";
import { StyleSheet, Text, View } from "react-native";
import { global } from "@/constants/Globals";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const LoadingScreen = () => {
  const styles = StyleSheet.create({
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 32,
      flexDirection: "column",
    },
  });

  return (
    <View style={global.container}>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.logoContainer}
      >
        <CustomLogo variant="Logo Default" width={160} height={160} />
        <Text
          style={textStyles.h2Bold}
          className="text-[#212121] dark:text-white"
        >
          ChattyAI
        </Text>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
