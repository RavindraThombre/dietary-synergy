import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import type { AppTheme } from "../../constants/theme";

type Props = {
  theme: AppTheme;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme.mode === "dark";

  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityLabel={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: theme.surfaceSecondary,
          borderColor: theme.border,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={20}
        color={theme.text}
      />

      {/* <Text style={[styles.label, { color: theme.text }]}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
  },
});
