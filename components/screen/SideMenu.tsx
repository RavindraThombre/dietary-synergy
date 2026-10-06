import { AppTheme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ThemeToggle from "./ThemeToggle";

type MenuScreen =
  | "home"
  | "checker"
  | "history"
  | "favorites"
  | "food-guide"
  | "privacy"
  | "terms"
  | "about"
  | "contact";

type Props = {
  visible: boolean;
  theme: AppTheme;
  onClose: () => void;
  onNavigate: (screen: MenuScreen) => void;
  onToggleTheme: () => void;
};

export default function SideMenu({
  visible,
  theme,
  onClose,
  onNavigate,
  onToggleTheme,
}: Props) {
  const slide = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(slide, {
      toValue: visible ? 0 : -300,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [visible, slide]);

  const menuItems: {
    label: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    screen: MenuScreen;
  }[] = [
    {
      label: "Home",
      icon: "home-outline",
      screen: "home",
    },
    {
      label: "Food Checker",
      icon: "restaurant-outline",
      screen: "checker",
    },
    {
      label: "History",
      icon: "time-outline",
      screen: "history",
    },
    {
      label: "Favorites",
      icon: "heart-outline",
      screen: "favorites",
    },
    {
      label: "Food Guide",
      icon: "book-outline",
      screen: "food-guide",
    },
    {
      label: "Privacy Policy",
      icon: "shield-checkmark-outline",
      screen: "privacy",
    },
    {
      label: "Terms & Conditions",
      icon: "document-text-outline",
      screen: "terms",
    },
    {
      label: "About",
      icon: "information-circle-outline",
      screen: "about",
    },
    {
      label: "Contact",
      icon: "mail-outline",
      screen: "contact",
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

        <Animated.View
          style={[
            styles.drawer,
            {
              backgroundColor: theme.surface,
              transform: [{ translateX: slide }],
            },
          ]}
        >
          {/* Brand Header */}
          <View style={styles.brandHeader}>
            <View
              style={[
                styles.logoContainer,
                {
                  backgroundColor: theme.surfaceSecondary,
                  borderColor: theme.border,
                },
              ]}
            >
              <Image
                source={require("@/assets/images/dietary-synergy-logo.png")}
                style={styles.logo}
                contentFit="contain"
              />
            </View>

            <View style={styles.brandContent}>
              <Text
                style={[
                  styles.brandName,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Dietary Synergy
              </Text>

              <Text
                style={[
                  styles.brandSubtitle,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                FOOD · WELLNESS
              </Text>
            </View>

            <Pressable
              onPress={onClose}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Close menu"
              style={({ pressed }) => ({
                opacity: pressed ? 0.6 : 1,
              })}
            >
              <Ionicons name="close" size={27} color={theme.text} />
            </Pressable>
          </View>

          {/* Scrollable Menu */}
          <ScrollView
            style={styles.menuScroll}
            contentContainerStyle={styles.menuContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {menuItems.map((item) => (
              <Pressable
                key={item.screen}
                onPress={() => onNavigate(item.screen)}
                style={({ pressed }) => [
                  styles.menuItem,
                  {
                    backgroundColor: pressed
                      ? theme.surfaceSecondary
                      : "transparent",
                  },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={theme.primary}
                  style={styles.menuIcon}
                />

                <Text
                  style={[
                    styles.menuLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {item.label}
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={19}
                  color={theme.textSecondary}
                />
              </Pressable>
            ))}
          </ScrollView>

          {/* Fixed Bottom Section */}
          <View
            style={[
              styles.bottomSection,
              {
                borderTopColor: theme.border,
              },
            ]}
          >
            {/* Theme */}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Bottom Branding */}
            <View style={styles.bottom}>
              <Text
                style={[
                  styles.bottomText,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                Dietary Synergy
              </Text>

              <Text
                style={[
                  styles.bottomText,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                Explore How Foods Work Together
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  drawer: {
    width: 300,
    maxWidth: "85%",
    height: "100%",

    paddingHorizontal: 20,
    paddingTop: 42,
    paddingBottom: 20,

    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },

  brandHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 15,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,

    borderWidth: 1,
  },

  logo: {
    width: 42,
    height: 42,
  },

  brandContent: {
    flex: 1,
  },

  brandName: {
    fontSize: 17,
    fontWeight: "800",
  },

  brandSubtitle: {
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 4,
  },

  menuScroll: {
    flex: 1,
  },

  menuContent: {
    paddingTop: 4,
    paddingBottom: 12,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",

    minHeight: 56,

    borderRadius: 13,

    paddingHorizontal: 13,

    marginBottom: 10,
  },

  menuIcon: {
    width: 36,
  },

  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
  },

  bottomSection: {
    borderTopWidth: 1,

    paddingTop: 16,
    marginTop: 8,
  },

  bottom: {
    marginTop: 14,
    paddingBottom: 4,
  },

  bottomText: {
    fontSize: 11,
    marginTop: 5,
  },
});
