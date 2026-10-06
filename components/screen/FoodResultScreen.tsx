import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

import type { AppTheme } from "../../constants/theme";
import type { FoodCombinationResult } from "../../service/foodCompatibility";

import {
  getFavorites,
  removeFavorite,
  saveFavorite,
} from "../../service/favoritesService";

import { styles } from "../../styles/FoodResultScreen.styles";

type Props = {
  theme: AppTheme;
  foods: string[];
  result: FoodCombinationResult | null;
};

export default function FoodResultScreen({ theme, foods, result }: Props) {
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  const favoriteId = foods
    .map((food) => food.trim().toLowerCase())
    .sort()
    .join("|");

  useEffect(() => {
    const checkFavorite = async () => {
      if (!favoriteId) {
        setIsFavoriteState(false);
        return;
      }

      const favorites = await getFavorites();

      setIsFavoriteState(
        favorites.some((favorite) => favorite.id === favoriteId),
      );
    };

    void checkFavorite();
  }, [favoriteId]);

  const toggleFavorite = async () => {
    if (foods.length < 2) {
      return;
    }

    if (isFavoriteState) {
      await removeFavorite(favoriteId);
      setIsFavoriteState(false);
      return;
    }

    await saveFavorite({
      id: favoriteId,
      foods,
      foodCount: foods.length as 2 | 3 | 4,
      result,
      savedAt: new Date().toISOString(),
    });

    setIsFavoriteState(true);
  };

  const isNotFound = !result;

  const compatibilityValue = result?.["Compatible/incompatible"] ?? "";

  const isCompatible =
    !isNotFound &&
    compatibilityValue.trim().toLowerCase().startsWith("compatible");

  const reason =
    result?.["Reason for compatibility/incompatibility"]?.trim() ||
    "No reason information is available for this combination.";

  const whatToAvoid =
    result?.["What to avoid for compatibility"]?.trim() ||
    "No specific avoidance information is available for this combination.";

  const source =
    result?.Source?.trim() || "Source information is not available.";

  // ---------------------------------------------------------
  // Status
  // ---------------------------------------------------------

  const statusColor = isNotFound
    ? theme.textSecondary
    : isCompatible
      ? theme.primary
      : "#C94B4B";

  const statusIcon: React.ComponentProps<typeof Ionicons>["name"] = isNotFound
    ? "help-circle-outline"
    : isCompatible
      ? "checkmark"
      : "close";

  const statusLabel = isNotFound
    ? "NOT FOUND"
    : isCompatible
      ? "COMPATIBLE"
      : "INCOMPATIBLE";

  const statusDescription = isNotFound
    ? "This combination was not found in the current compatibility database."
    : isCompatible
      ? "These foods are marked as compatible in the database."
      : "These foods are marked as incompatible in the database.";

  // ---------------------------------------------------------
  // Animation
  // ---------------------------------------------------------

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(35)).current;
  const scaleAnim = useRef(new Animated.Value(0.96)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    translateYAnim.setValue(35);
    scaleAnim.setValue(0.96);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.spring(translateYAnim, {
        toValue: 0,
        damping: 16,
        stiffness: 120,
        mass: 0.8,
        useNativeDriver: true,
      }),

      Animated.spring(scaleAnim, {
        toValue: 1,
        damping: 16,
        stiffness: 120,
        mass: 0.8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [foods, result]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: translateYAnim,
            },
            {
              scale: scaleAnim,
            },
          ],
        },
      ]}
    >
      {/* -------------------------------------------------
          Result Header
      ------------------------------------------------- */}

      <View style={styles.titleSection}>
        <View
          style={[
            styles.resultIcon,
            {
              backgroundColor: statusColor,
            },
          ]}
        >
          <Ionicons name={statusIcon} size={32} color="#FFFFFF" />
        </View>

        <View style={styles.titleContent}>
          <Text
            style={[
              styles.title,
              {
                color: theme.text,
              },
            ]}
          >
            Compatibility Result
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            {isNotFound
              ? "We couldn't find this combination"
              : "Here's what we found"}
          </Text>

          {!isNotFound && (
            <Pressable
              onPress={toggleFavorite}
              accessibilityRole="button"
              accessibilityLabel={
                isFavoriteState ? "Remove from favorites" : "Add to favorites"
              }
              style={({ pressed }) => [
                styles.favoriteButton,
                {
                  backgroundColor: isFavoriteState
                    ? theme.primaryLight
                    : theme.surfaceSecondary,
                  borderColor: theme.border,
                  opacity: pressed ? 0.65 : 1,
                },
              ]}
            >
              <Ionicons
                name={isFavoriteState ? "star" : "star-outline"}
                size={21}
                color={theme.primary}
              />
            </Pressable>
          )}
        </View>
      </View>

      {/* -------------------------------------------------
          Selected Foods
      ------------------------------------------------- */}

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[
              styles.sectionIcon,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons
              name="restaurant-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.cardHeaderContent}>
            <Text
              style={[
                styles.cardTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Selected Foods
            </Text>

            <Text
              style={[
                styles.cardSubtitle,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Your selected combination
            </Text>
          </View>
        </View>

        <View style={styles.foodsContainer}>
          {foods.map((food, index) => (
            <View key={`${food}-${index}`} style={styles.foodItem}>
              <View
                style={[
                  styles.foodChip,
                  {
                    backgroundColor: theme.surfaceSecondary,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={styles.foodEmoji}>{getFoodEmoji(food)}</Text>

                <Text
                  numberOfLines={2}
                  style={[
                    styles.foodText,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {food}
                </Text>
              </View>

              {index < foods.length - 1 && (
                <Text
                  style={[
                    styles.plus,
                    {
                      color: theme.textSecondary,
                    },
                  ]}
                >
                  +
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* -------------------------------------------------
          Compatibility Status
      ------------------------------------------------- */}

      <View
        style={[
          styles.statusCard,
          {
            backgroundColor: theme.surfaceSecondary,
            borderColor: statusColor,
          },
        ]}
      >
        <View
          style={[
            styles.statusIcon,
            {
              backgroundColor: statusColor,
            },
          ]}
        >
          <Ionicons name={statusIcon} size={24} color="#FFFFFF" />
        </View>

        <View style={styles.statusContent}>
          <Text
            style={[
              styles.statusLabel,
              {
                color: statusColor,
              },
            ]}
          >
            {statusLabel}
          </Text>

          <Text
            style={[
              styles.statusDescription,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            {statusDescription}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={18}
          color={theme.textSecondary}
          style={styles.statusArrow}
        />
      </View>

      {/* -------------------------------------------------
          Database Details
      ------------------------------------------------- */}

      {result ? (
        <>
          <InfoSection
            theme={theme}
            icon="bulb-outline"
            title="Why this result?"
            text={reason}
          />

          <InfoSection
            theme={theme}
            icon="warning-outline"
            title="What to Avoid"
            text={whatToAvoid}
          />

          <InfoSection
            theme={theme}
            icon="book-outline"
            title="Source"
            text={source}
          />
        </>
      ) : (
        <View
          style={[
            styles.notFoundCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <View
            style={[
              styles.notFoundIcon,
              {
                backgroundColor: theme.surfaceSecondary,
              },
            ]}
          >
            <Ionicons
              name="search-outline"
              size={20}
              color={theme.textSecondary}
            />
          </View>

          <View style={styles.notFoundContent}>
            <Text
              style={[
                styles.notFoundTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Combination Not Found
            </Text>

            <Text
              style={[
                styles.notFoundText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              This combination is not currently available in the Dietary Synergy
              compatibility database. Try another combination.
            </Text>
          </View>
        </View>
      )}

      {/* -------------------------------------------------
          Disclaimer
      ------------------------------------------------- */}

      <View
        style={[
          styles.disclaimer,
          {
            backgroundColor: theme.surfaceSecondary,
            borderColor: theme.border,
          },
        ]}
      >
        <View
          style={[
            styles.disclaimerIcon,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Ionicons
            name="information-circle-outline"
            size={19}
            color={theme.primary}
          />
        </View>

        <Text
          style={[
            styles.disclaimerText,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          Dietary Synergy provides informational food compatibility guidance
          based on the available compatibility database.
        </Text>
      </View>

      {/* <Text
        style={[
          styles.footer,
          {
            color: theme.textSecondary,
          },
        ]}
      >
        Dietary Synergy · Explore How Foods Work Together
      </Text> */}
    </Animated.View>
  );
}

// ---------------------------------------------------------
// Info Section
// ---------------------------------------------------------

type InfoSectionProps = {
  theme: AppTheme;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  text: string;
};

function InfoSection({ theme, icon, title, text }: InfoSectionProps) {
  return (
    <View
      style={[
        styles.infoCard,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <View
        style={[
          styles.infoIcon,
          {
            backgroundColor: theme.primaryLight,
          },
        ]}
      >
        <Ionicons name={icon} size={19} color={theme.primary} />
      </View>

      <View style={styles.infoContent}>
        <Text
          style={[
            styles.infoTitle,
            {
              color: theme.text,
            },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.infoText,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------
// Food Emoji
// ---------------------------------------------------------

function getFoodEmoji(food: string): string {
  const value = food.trim().toLowerCase();

  const foodEmojiMap: Record<string, string> = {
    apple: "🍎",
    banana: "🍌",
    orange: "🍊",
    mango: "🥭",
    pineapple: "🍍",
    papaya: "🍈",
    watermelon: "🍉",
    grapes: "🍇",
    strawberry: "🍓",
    blueberry: "🫐",
    lemon: "🍋",
    lime: "🍋",

    tomato: "🍅",
    potato: "🥔",
    carrot: "🥕",
    onion: "🧅",
    garlic: "🧄",
    broccoli: "🥦",
    corn: "🌽",
    cucumber: "🥒",
    avocado: "🥑",
    spinach: "🥬",
    lettuce: "🥬",
    mushroom: "🍄",
    peas: "🫛",
    chili: "🌶️",
    pepper: "🫑",

    rice: "🍚",
    bread: "🍞",
    oats: "🌾",
    wheat: "🌾",
    pasta: "🍝",

    milk: "🥛",
    cheese: "🧀",
    yogurt: "🥛",
    curd: "🥛",
    egg: "🥚",

    chicken: "🍗",
    fish: "🐟",
    salmon: "🐟",
    shrimp: "🍤",
    prawn: "🍤",
    meat: "🥩",
    beef: "🥩",

    almond: "🌰",
    almonds: "🌰",
    walnut: "🌰",
    walnuts: "🌰",
    peanut: "🥜",
    peanuts: "🥜",
    cashew: "🌰",
    cashews: "🌰",

    beans: "🫘",
    lentils: "🫘",
    chickpea: "🫘",
    chickpeas: "🫘",

    honey: "🍯",
    sugar: "🍚",

    coffee: "☕",
    tea: "🍵",
    water: "💧",
    coconut: "🥥",
  };

  for (const [key, emoji] of Object.entries(foodEmojiMap)) {
    if (value.includes(key)) {
      return emoji;
    }
  }

  return "🍽️";
}
