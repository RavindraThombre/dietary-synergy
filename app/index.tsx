import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import AboutScreen from "../components/screen/AboutScreen";
import ContactScreen from "../components/screen/ContactScreen";
import FoodCheckerScreen from "../components/screen/FoodCheckerScreen";
import HomeLanding from "../components/screen/HomeLanding";
import SideMenu from "../components/screen/SideMenu";

import FavoritesScreen from "../components/screen/FavoritesScreen";
import FoodGuideScreen from "../components/screen/FoodGuideScreen";
import HistoryScreen from "../components/screen/HistoryScreen";
import PrivacyPolicyScreen from "../components/screen/PrivacyPolicyScreen";
import TermsConditionsScreen from "../components/screen/TermsConditionsScreen";
import { darkTheme, lightTheme, type AppTheme } from "../constants/theme";

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

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeScreen, setActiveScreen] = useState<MenuScreen>("home");
  const [menuVisible, setMenuVisible] = useState(false);

  const theme: AppTheme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const navigateTo = (screen: MenuScreen) => {
    setActiveScreen(screen);
    setMenuVisible(false);
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      {/* Home */}
      {activeScreen === "home" && (
        <HomeLanding
          theme={theme}
          onOpenMenu={() => setMenuVisible(true)}
          onOpenChecker={() => setActiveScreen("checker")}
          onOpenFoodGuide={() => setActiveScreen("food-guide")}
          onOpenHistory={() => setActiveScreen("history")}
          onOpenFavorites={() => setActiveScreen("favorites")}
          onToggleTheme={toggleTheme}
        />
      )}

      {/* Food Checker + Result */}
      {activeScreen === "checker" && (
        <FoodCheckerScreen
          theme={theme}
          onBack={() => setActiveScreen("home")}
        />
      )}

      {activeScreen === "history" && (
        <HistoryScreen theme={theme} onBack={() => setActiveScreen("home")} />
      )}

      {activeScreen === "favorites" && (
        <FavoritesScreen theme={theme} onBack={() => setActiveScreen("home")} />
      )}

      {activeScreen === "food-guide" && (
        <FoodGuideScreen theme={theme} onBack={() => setActiveScreen("home")} />
      )}

      {activeScreen === "privacy" && (
        <PrivacyPolicyScreen
          theme={theme}
          onBack={() => setActiveScreen("home")}
        />
      )}

      {activeScreen === "terms" && (
        <TermsConditionsScreen
          theme={theme}
          onBack={() => setActiveScreen("home")}
        />
      )}

      {/* About */}
      {activeScreen === "about" && (
        <AboutScreen theme={theme} onBack={() => setActiveScreen("home")} />
      )}

      {/* Contact */}
      {activeScreen === "contact" && (
        <ContactScreen theme={theme} onBack={() => setActiveScreen("home")} />
      )}

      {/* Side Menu */}
      <SideMenu
        visible={menuVisible}
        theme={theme}
        onClose={() => setMenuVisible(false)}
        onNavigate={navigateTo}
        onToggleTheme={toggleTheme}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
