import React, { useState } from "react";
import { global } from "@/constants/Globals";
import { textStyles } from "@/constants/Typography";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import Animated, {
  BounceIn,
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Walkthrough = () => {
  const { dark } = useTheme();
  const styles = StyleSheet.create({
    topContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      paddingVertical: 24,
      marginTop: "auto",
    },
    textContainer: {
      paddingHorizontal: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
    },
    centeredText: {
      textAlign: "center", // Text'i ortalar
    },
    dotsContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      justifyContent: "center",
    },
    bottomContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: 24,
      paddingBottom: 36,
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: 1,
    },
    actionButton: {
      flex: 1,
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

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const tabs = [
    {
      mainTitle: "The best AI Chatbot app in this century",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      image: require("@/assets/images/step-1.png"),
    },
    {
      mainTitle: "Various AI Assistants to help you more",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      image: require("@/assets/images/step-2.png"),
    },
    {
      mainTitle: "Try premium for your unlimited usage",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      image: require("@/assets/images/step-3.png"),
    },
  ];

  const dotsSizes = [useSharedValue(8), useSharedValue(8), useSharedValue(8)];

  const updateDotSizes = (index: number) => {
    dotsSizes.forEach((size, i) => {
      size.value = withSpring(i === index ? 32 : 8);
    });
  };

  const handleNext = () => {
    if (activeIndex < tabs.length - 1) {
      setButtonsDisabled(true); // Disable buttons
      setActiveIndex((prev) => {
        const newIndex = prev + 1;
        updateDotSizes(newIndex);
        return newIndex;
      });
      setTimeout(() => setButtonsDisabled(false), 500); // Re-enable after 1 second
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setButtonsDisabled(true); // Disable buttons
      setActiveIndex((prev) => {
        const newIndex = prev - 1;
        updateDotSizes(newIndex);
        return newIndex;
      });
      setTimeout(() => setButtonsDisabled(false), 500); // Re-enable after 1 second
    }
  };

  const handleSkip = () => {
    // Navigate to the next screen or perform any action
  };

  const handleComplate = () => {
    // Navigate to the next screen or perform any action
  };

  return (
    <View className="bg-white dark:bg-dark-1 relative" style={global.container}>
      {tabs.map((tab, index) => {
        if (index === activeIndex) {
          return (
            <Animated.Image
              key={index}
              entering={FadeInDown.duration(500).springify().delay(250)}
              exiting={FadeOutDown.duration(500).springify()}
              style={{ zIndex: -1 }}
              source={tabs[activeIndex].image}
            />
          );
        }
      })}
      <View
        style={[styles.topContainer, { position: "relative" }]}
        className="bg-white dark:bg-dark-1 relative"
      >
        <LinearGradient
          colors={
            !dark
              ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
              : ["rgba(255, 255, 255, 0)", "#181A20"]
          }
          style={{
            position: "absolute",
            bottom: `100%`,
            transform: [{ translateY: -40 }],
            width: Dimensions.get("window").width,
            height: 140,
            zIndex: 5,
          }}
        />
        <View style={[styles.textContainer, { zIndex: 65 }]}>
          {tabs.map((tab, index) => {
            if (index === activeIndex) {
              return (
                <Animated.View key={index}>
                  <Animated.Text
                    entering={FadeInLeft.duration(500).delay(250)}
                    exiting={FadeOutLeft.duration(500).springify()}
                    className="text-[#212121] dark:text-white"
                    style={[textStyles.h3Bold, styles.centeredText]} // Stil güncellendi
                  >
                    {tabs[activeIndex].mainTitle}
                  </Animated.Text>
                  <Animated.Text
                    entering={FadeInRight.duration(500).delay(250)}
                    exiting={FadeOutRight.duration(500).springify()}
                    className="text-[#212121] dark:text-white"
                    style={[textStyles.bodyXlargeRegular, styles.centeredText]} // Stil güncellendi
                  >
                    {tabs[activeIndex].subTitle}
                  </Animated.Text>
                </Animated.View>
              );
            }
          })}
        </View>
        <View style={styles.dotsContainer}>
          {tabs.map((_, index) => (
            <Animated.View
              key={index}
              style={{
                width: dotsSizes[index],
              }}
              className={`${
                activeIndex === index
                  ? "w-8 bg-[#17CE92]"
                  : "w-2 bg-[#E0E0E0] dark:bg-dark-4"
              } h-2 rounded-full transition-all duration-200`}
            />
          ))}
        </View>
      </View>

      <Animated.View
        className="border-[#F5F5F5] dark:border-[#35383F]"
        entering={FadeInUp.duration(500).springify()}
        style={styles.bottomContainer}
      >
        <TouchableOpacity
          disabled={buttonsDisabled}
          onPress={activeIndex === 0 ? handleSkip : handlePrev}
          activeOpacity={0.75}
          className="bg-[#E8FAF4] dark:bg-dark-4"
          style={[styles.actionButton, { opacity: buttonsDisabled ? 0.5 : 1 }]}
        >
          <Text
            className="text-[#17CE92] dark:text-white"
            style={textStyles.bodyXlargeBold}
          >
            {activeIndex !== 0 ? "Previous" : "Skip"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={buttonsDisabled}
          onPress={
            activeIndex === tabs.length - 1 ? handleComplate : handleNext
          }
          activeOpacity={0.75}
          className="bg-[#17CE92]"
          style={[styles.actionButton, styles.nextShadow]}
        >
          <Text className="text-white" style={textStyles.bodyXlargeBold}>
            {activeIndex === tabs.length - 1 ? "Complete" : "Next"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Walkthrough;
