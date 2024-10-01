import React from "react";
import LogoDefault from "./Logo-Default.svg";
import LogoCircle from "./Logo-Circle.svg";
import LogoTextDark from "./Logo-Text-Dark.svg";
import LogoTextLight from "./Logo-Text-Light.svg";
import { useTheme } from "@react-navigation/native";

type Props = {
  variant: "Logo Default" | "Logo Circle" | "Logo Text";
  width?: number | undefined;
  height?: number | undefined;
};

const IconSource = (dark: boolean) => {
  return {
    "Logo Default": LogoDefault,
    "Logo Circle": LogoCircle,
    "Logo Text": dark ? LogoTextDark : LogoTextLight,
  };
};

const CustomLogo = ({ variant, width, height }: Props) => {
  const { dark } = useTheme();
  const LogoComponent = IconSource(dark)[variant];
  if (!LogoComponent) {
    console.error(`No component found for variant: ${variant}`);
    return null;
  }
  return <LogoComponent width={width} height={height} />;
};

export default CustomLogo;
