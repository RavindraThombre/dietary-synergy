import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import type { AppTheme } from "../../constants/theme";

import {
  clearFavorites,
  getFavorites,
  removeFavorite,
  type FoodFavoriteItem,
} from "../../service/favoritesService";

import { styles } from "../../styles/FavoritesScreen.styles";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

export default function FavoritesScreen({ theme, onBack }: Props) {
  const [favorites, setFavorites] = useState<FoodFavoriteItem[]>([]);

  const loadFavorites = useCallback(async () => {
    const items = await getFavorites();
    setFavorites(items);
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const handleRemove = (id: string) => {
    Alert.alert(
      "Remove favorite",
      "Remove this combination from your favorites?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            await removeFavorite(id);
            await loadFavorites();
          },
        },
      ],
    );
  };

  const handleClearFavorites = () => {
    if (favorites.length === 0) {
      return;
    }

    Alert.alert("Clear favorites", "Remove all saved combinations?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear All",
        style: "destructive",
        onPress: async () => {
          await clearFavorites();
          setFavorites([]);
        },
      },
    ]);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatus = (item: FoodFavoriteItem) => {
    if (!item.result) {
      return {
        text: "No result found",
        color: theme.textSecondary,
        background: theme.surfaceSecondary,
        icon: "help-circle-outline" as const,
      };
    }

    const value = item.result["Compatible/incompatible"] ?? "";

    const compatible = value.trim().toLowerCase().startsWith("compatible");

    if (compatible) {
      return {
        text: "Compatible",
        color: "#16A34A",
        background: "rgba(22, 163, 74, 0.12)",
        icon: "checkmark-circle" as const,
      };
    }

    return {
      text: "Incompatible",
      color: "#DC2626",
      background: "rgba(220, 38, 38, 0.12)",
      icon: "close-circle" as const,
    };
  };

  const renderItem = ({ item }: { item: FoodFavoriteItem }) => {
    const status = getStatus(item);

    return (
      <View
        style={[
          styles.favoriteCard,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.favoriteTopRow}>
          <View
            style={[
              styles.foodIcon,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons
              name="nutrition-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.foodContent}>
            <Text
              numberOfLines={3}
              style={[styles.foodsText, { color: theme.text }]}
            >
              {item.foods.join(" + ")}
            </Text>

            <Text
              style={[
                styles.combinationText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              {item.foodCount}-food combination
            </Text>
          </View>

          <Pressable
            onPress={() => handleRemove(item.id)}
            hitSlop={8}
            style={({ pressed }) => [
              styles.starButton,
              {
                backgroundColor: theme.primaryLight,
                opacity: pressed ? 0.65 : 1,
              },
            ]}
          >
            <Ionicons name="star" size={19} color={theme.primary} />
          </Pressable>
        </View>

        <View
          style={[
            styles.divider,
            {
              backgroundColor: theme.border,
            },
          ]}
        />

        <View style={styles.favoriteBottomRow}>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusIcon,
                {
                  backgroundColor: status.background,
                },
              ]}
            >
              <Ionicons name={status.icon} size={16} color={status.color} />
            </View>

            <Text
              style={[
                styles.statusText,
                {
                  color: status.color,
                },
              ]}
            >
              {status.text}
            </Text>
          </View>

          <Text
            style={[
              styles.savedText,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Saved {formatDate(item.savedAt)}
          </Text>
        </View>
      </View>
    );
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
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Pressable
                  onPress={onBack}
                  accessibilityRole="button"
                  accessibilityLabel="Back to home"
                  style={[
                    styles.backButton,
                    {
                      backgroundColor: theme.surfaceSecondary,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Ionicons name="arrow-back" size={19} color={theme.primary} />
                </Pressable>

                <View
                  style={[
                    styles.headerIcon,
                    {
                      backgroundColor: theme.primaryLight,
                    },
                  ]}
                >
                  <Ionicons name="star" size={23} color={theme.primary} />
                </View>

                <View style={styles.titleContainer}>
                  <Text style={[styles.title, { color: theme.text }]}>
                    Favorites
                  </Text>

                  <Text
                    style={[
                      styles.subtitle,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    Save frequently checked combinations
                  </Text>
                </View>
              </View>

              {favorites.length > 0 && (
                <Pressable
                  onPress={handleClearFavorites}
                  style={styles.clearButton}
                >
                  <Text
                    style={[
                      styles.clearButtonText,
                      {
                        color: theme.primary,
                      },
                    ]}
                  >
                    Clear
                  </Text>
                </Pressable>
              )}
            </View>

            {favorites.length > 0 && (
              <View
                style={[
                  styles.summaryCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View style={styles.summaryRow}>
                  <View
                    style={[
                      styles.summaryIcon,
                      {
                        backgroundColor: theme.primaryLight,
                      },
                    ]}
                  >
                    <Ionicons name="star" size={21} color={theme.primary} />
                  </View>

                  <View style={styles.summaryContent}>
                    <Text style={[styles.summaryTitle, { color: theme.text }]}>
                      {favorites.length} saved{" "}
                      {favorites.length === 1 ? "combination" : "combinations"}
                    </Text>

                    <Text
                      style={[
                        styles.summaryText,
                        {
                          color: theme.textSecondary,
                        },
                      ]}
                    >
                      Your frequently checked combinations are saved here.
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {favorites.length > 0 && (
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                  Saved Combinations
                </Text>

                <Text
                  style={[
                    styles.sectionCount,
                    {
                      color: theme.textSecondary,
                      backgroundColor: theme.surfaceSecondary,
                    },
                  ]}
                >
                  {favorites.length}
                </Text>
              </View>
            )}
          </>
        }
        ListEmptyComponent={
          <View
            style={[
              styles.emptyCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <View
              style={[
                styles.emptyIcon,
                {
                  backgroundColor: theme.primaryLight,
                },
              ]}
            >
              <Ionicons name="star-outline" size={31} color={theme.primary} />
            </View>

            <Text style={[styles.emptyTitle, { color: theme.text }]}>
              No favorites yet
            </Text>

            <Text
              style={[
                styles.emptyText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Save frequently checked food combinations here for quick access.
            </Text>
          </View>
        }
        ListFooterComponent={
          favorites.length > 0 ? (
            <Text
              style={[
                styles.footer,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Dietary Synergy · Favorites
            </Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
