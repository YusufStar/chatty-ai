import { textStyles } from "@/constants/Typography";
import {
  ChevronDown,
  TickSquare,
  Calendar,
} from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutUp,
} from "react-native-reanimated";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs, isDayjs } from "dayjs";
import { global } from "@/constants/Globals";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "password" | "email" | "number";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const FormInput = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const { dark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      zIndex: isFocused ? 9999 : 10,
    },
    input: {
      flex: 1,
      paddingRight: 36,
      paddingBottom: 8,
      color: dark ? "#fff" : "#212121",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderBottomWidth: 1,
      borderBottomColor: error ? "#FF0000" : isFocused ? "#17CE92" : "#9E9E9E",
    },
    iconContainer: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <Text
        style={textStyles.bodyLargeBold}
        className="text-[#212121] dark:text-white"
      >
        {props.label}
      </Text>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>{props.icon}</View>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={dark ? "#35383F" : "#9E9E9E"}
          style={[styles.input, textStyles.h6Bold]}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChange}
          secureTextEntry={props.type === "password"}
        />
      </View>
    </View>
  );
};

type SelectProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export const FormSelect = (props: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { dark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      borderColor: "#9E9E9E",
      flexDirection: "column",
      gap: 16,
      zIndex: isOpen ? 9999 : 10,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#9E9E9E",
      paddingBottom: 12,
    },
    optionsContainer: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      borderRadius: 8,
      borderTopEndRadius: 0,
      borderTopStartRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderWidth: 1,
      borderColor: "#9E9E9E",
      backgroundColor: dark ? "#171717" : "#fff",
      maxHeight: 200,
    },
    optionBox: {
      padding: 12,
      borderBottomColor: "#9E9E9E",
    },
    option: {
      color: dark ? "#fff" : "#212121",
    },
  });

  return (
    <View style={styles.container}>
      <Text
        style={textStyles.bodyLargeBold}
        className="text-[#212121] dark:text-white"
      >
        {props.label}
      </Text>

      <Pressable
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.inputContainer]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text
          className="text-[#212121] dark:text-white"
          style={[
            textStyles.bodyLargeMedium,
            {
              marginRight: "auto",
            },
          ]}
        >
          {props.value || props.placeholder}
        </Text>

        <ChevronDown size={16} color={dark ? "#fff" : "#212121"} />
      </Pressable>

      {isOpen && (
        <Animated.ScrollView
          entering={FadeInUp}
          exiting={FadeOutDown}
          style={[styles.optionsContainer]}
        >
          {props.options.map((option) => (
            <Pressable
              style={[
                styles.optionBox,
                {
                  borderBottomWidth:
                    option === props.options[props.options.length - 1] ? 0 : 1,
                  opacity: props.value === option ? 0.5 : 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
              key={option}
              onPress={() => {
                props.onChange(option);
                setIsOpen(false);
              }}
            >
              <Text
                style={[textStyles.bodyMediumMedium, styles.option]}
                className="text-[#212121] dark:text-white"
              >
                {option}
              </Text>
              {props.value === option && (
                <TickSquare size={16} color={dark ? "#fff" : "#212121"} />
              )}
            </Pressable>
          ))}
        </Animated.ScrollView>
      )}
    </View>
  );
};

type DateProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: Dayjs) => void;
};

export const FormDate = (props: DateProps) => {
  const [date, setDate] = useState(dayjs());
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { dark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      zIndex: isOpen ? 9999 : 10,
      position: "relative",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#9E9E9E",
      paddingBottom: 12,
    },
    optionsContainer: {
      position: "absolute",
      alignSelf: "center",
      bottom: "100%",
      borderWidth: 1,
      borderColor: "#9E9E9E",
      backgroundColor: dark ? "#171717" : "#fff",
    },
    optionBox: {
      padding: 12,
      borderBottomColor: "#9E9E9E",
    },
    option: {
      color: dark ? "#fff" : "#212121",
    },
  });

  return (
    <View style={styles.container}>
      <Text
        style={textStyles.bodyLargeBold}
        className="text-[#212121] dark:text-white"
      >
        {props.label}
      </Text>

      <Pressable
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.inputContainer]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text
          className="text-[#212121] dark:text-white"
          style={[
            textStyles.bodyLargeMedium,
            {
              marginRight: "auto",
            },
          ]}
        >
          {props.value || props.placeholder}
        </Text>

        <Calendar size={16} color={dark ? "#fff" : "#212121"} />
      </Pressable>

      {isOpen && (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutDown}
          style={[
            styles.optionsContainer,
            { backgroundColor: "#fff", borderRadius: 8 },
          ]}
        >
          <DateTimePicker
            mode="single"
            date={date}
            onChange={(params) => {
              if (isDayjs(params?.date)) {
                setDate(params.date);
                props.onChange(params.date);
                setIsOpen(false);
              }
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};
