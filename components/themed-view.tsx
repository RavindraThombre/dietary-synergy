import { View, type ViewProps } from "react-native";
import { useTheme } from "../hooks/use-theme";
import { ThemeColor } from "../constants/theme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type = "background",
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();

  const backgroundColor =
    (theme.mode === "light" ? lightColor : darkColor) ?? theme[type];

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
