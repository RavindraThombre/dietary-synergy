import { darkTheme, lightTheme, type AppTheme } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useTheme(): AppTheme {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}
