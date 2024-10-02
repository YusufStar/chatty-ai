import { textStyles } from "@/constants/Typography";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "password" | "email" | "number";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const FormInput = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const { dark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
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

export default FormInput;
