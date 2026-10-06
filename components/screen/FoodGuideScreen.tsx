import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import type { AppTheme } from "../../constants/theme";
import { styles } from "../../styles/FoodGuideScreen.styles";
import { getFoodGuideOptions } from "@/service/foodCompatibility";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

const getFoodEmoji = (food: string): string => {
  const value = food.trim().toLowerCase();

  // Fruits
  if (value.includes("apple")) return "🍎";
  if (value.includes("banana")) return "🍌";
  if (value.includes("orange")) return "🍊";
  if (value.includes("mango")) return "🥭";
  if (value.includes("grape")) return "🍇";
  if (value.includes("watermelon")) return "🍉";
  if (value.includes("strawberry")) return "🍓";
  if (value.includes("blueberry")) return "🫐";
  if (value.includes("pineapple")) return "🍍";
  if (value.includes("papaya")) return "🥭";
  if (value.includes("peach")) return "🍑";
  if (value.includes("pear")) return "🍐";
  if (value.includes("cherry")) return "🍒";
  if (value.includes("kiwi")) return "🥝";
  if (value.includes("lemon")) return "🍋";
  if (value.includes("lime")) return "🍋";
  if (value.includes("coconut")) return "🥥";
  if (value.includes("pomegranate")) return "🍎";
  if (value.includes("guava")) return "🍐";

  // Vegetables
  if (value.includes("carrot")) return "🥕";
  if (value.includes("broccoli")) return "🥦";
  if (value.includes("cauliflower")) return "🥦";
  if (value.includes("tomato")) return "🍅";
  if (value.includes("potato")) return "🥔";
  if (value.includes("corn")) return "🌽";
  if (value.includes("cucumber")) return "🥒";
  if (value.includes("onion")) return "🧅";
  if (value.includes("garlic")) return "🧄";
  if (value.includes("pepper")) return "🌶️";
  if (value.includes("chilli")) return "🌶️";
  if (value.includes("spinach")) return "🥬";
  if (value.includes("lettuce")) return "🥬";
  if (value.includes("cabbage")) return "🥬";
  if (value.includes("peas")) return "🫛";
  if (value.includes("pea")) return "🫛";
  if (value.includes("beet")) return "🥬";
  if (value.includes("radish")) return "🥕";
  if (value.includes("pumpkin")) return "🎃";
  if (value.includes("mushroom")) return "🍄";
  if (value.includes("okra")) return "🥬";
  if (value.includes("eggplant")) return "🍆";
  if (value.includes("brinjal")) return "🍆";

  // Dairy
  if (value.includes("milk")) return "🥛";
  if (value.includes("cheese")) return "🧀";
  if (value.includes("yogurt")) return "🥛";
  if (value.includes("curd")) return "🥛";
  if (value.includes("butter")) return "🧈";
  if (value.includes("cream")) return "🥛";
  if (value.includes("paneer")) return "🧀";

  // Eggs
  if (value.includes("egg")) return "🥚";

  // Grains / cereals
  if (value.includes("rice")) return "🍚";
  if (value.includes("wheat")) return "🌾";
  if (value.includes("oat")) return "🌾";
  if (value.includes("oats")) return "🌾";
  if (value.includes("barley")) return "🌾";
  if (value.includes("millet")) return "🌾";
  if (value.includes("quinoa")) return "🌾";
  if (value.includes("bread")) return "🍞";
  if (value.includes("roti")) return "🫓";
  if (value.includes("chapati")) return "🫓";
  if (value.includes("pasta")) return "🍝";
  if (value.includes("noodle")) return "🍜";

  // Meat
  if (value.includes("chicken")) return "🍗";
  if (value.includes("turkey")) return "🍗";
  if (value.includes("beef")) return "🥩";
  if (value.includes("mutton")) return "🍖";
  if (value.includes("lamb")) return "🍖";
  if (value.includes("pork")) return "🥩";
  if (value.includes("meat")) return "🥩";
  if (value.includes("bacon")) return "🥓";
  if (value.includes("sausage")) return "🌭";

  // Seafood
  if (value.includes("fish")) return "🐟";
  if (value.includes("salmon")) return "🐟";
  if (value.includes("tuna")) return "🐟";
  if (value.includes("prawn")) return "🦐";
  if (value.includes("shrimp")) return "🦐";
  if (value.includes("crab")) return "🦀";
  if (value.includes("lobster")) return "🦞";
  if (value.includes("seafood")) return "🐟";

  // Nuts
  if (value.includes("almond")) return "🥜";
  if (value.includes("peanut")) return "🥜";
  if (value.includes("cashew")) return "🥜";
  if (value.includes("walnut")) return "🥜";
  if (value.includes("pistachio")) return "🥜";
  if (value.includes("hazelnut")) return "🥜";
  if (value.includes("nut")) return "🥜";

  // Legumes
  if (value.includes("bean")) return "🫘";
  if (value.includes("lentil")) return "🫘";
  if (value.includes("dal")) return "🫘";
  if (value.includes("chickpea")) return "🫘";
  if (value.includes("chick pea")) return "🫘";
  if (value.includes("soy")) return "🫘";
  if (value.includes("tofu")) return "🫘";

  // Herbs / spices
  if (value.includes("basil")) return "🌿";
  if (value.includes("mint")) return "🌿";
  if (value.includes("coriander")) return "🌿";
  if (value.includes("parsley")) return "🌿";
  if (value.includes("ginger")) return "🫚";
  if (value.includes("turmeric")) return "🌿";
  if (value.includes("cinnamon")) return "🌿";
  if (value.includes("clove")) return "🌿";
  if (value.includes("cardamom")) return "🌿";
  if (value.includes("spice")) return "🌿";

  // Sweeteners
  if (value.includes("honey")) return "🍯";
  if (value.includes("sugar")) return "🍬";
  if (value.includes("chocolate")) return "🍫";

  // Drinks
  if (value.includes("coffee")) return "☕";
  if (value.includes("tea")) return "🍵";
  if (value.includes("juice")) return "🧃";
  if (value.includes("water")) return "💧";

  // Generic fallback
  return "🍽️";
};

export default function FoodGuideScreen({ theme, onBack }: Props) {
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState<string | null>(null);

  const foodOptions = useMemo(() => getFoodGuideOptions(), []);

  const filteredFoods = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return foodOptions;
    }

    return foodOptions.filter((food) => food.toLowerCase().includes(value));
  }, [foodOptions, search]);

  const openFood = (food: string) => {
    setSelectedFood(food);
  };

  const closeFood = () => {
    setSelectedFood(null);
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

      {selectedFood ? (
        <FoodDetails food={selectedFood} theme={theme} onBack={closeFood} />
      ) : (
        <FlatList
          data={filteredFoods}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.listContent}
          initialNumToRender={30}
          maxToRenderPerBatch={50}
          windowSize={10}
          ListHeaderComponent={
            <>
              {/* =========================
                  HEADER
              ========================= */}
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Pressable
                    onPress={onBack}
                    accessibilityRole="button"
                    accessibilityLabel="Back to home"
                    style={({ pressed }) => [
                      styles.backButton,
                      {
                        backgroundColor: theme.surfaceSecondary,
                        borderColor: theme.border,
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}
                  >
                    <Ionicons
                      name="arrow-back"
                      size={19}
                      color={theme.primary}
                    />
                  </Pressable>

                  <View
                    style={[
                      styles.headerIcon,
                      {
                        backgroundColor: theme.primaryLight,
                      },
                    ]}
                  >
                    <Ionicons
                      name="leaf-outline"
                      size={23}
                      color={theme.primary}
                    />
                  </View>

                  <View style={styles.titleContainer}>
                    <Text
                      style={[
                        styles.title,
                        {
                          color: theme.text,
                        },
                      ]}
                    >
                      Food Library
                    </Text>

                    <Text
                      style={[
                        styles.subtitle,
                        {
                          color: theme.textSecondary,
                        },
                      ]}
                    >
                      Explore foods in Dietary Synergy
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={[
                  styles.introCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.introIcon,
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

                <View style={styles.introContent}>
                  <Text
                    style={[
                      styles.introTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    Explore your food options
                  </Text>

                  <Text
                    style={[
                      styles.introText,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    Browse foods available in the Dietary Synergy compatibility
                    database.
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.searchContainer,
                  {
                    backgroundColor: theme.input,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Ionicons
                  name="search-outline"
                  size={20}
                  color={theme.textSecondary}
                />

                <TextInput
                  value={search}
                  onChangeText={setSearch}
                  placeholder="Search foods..."
                  placeholderTextColor={theme.textSecondary}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={[
                    styles.searchInput,
                    {
                      color: theme.text,
                    },
                  ]}
                />

                {search.length > 0 && (
                  <Pressable onPress={() => setSearch("")} hitSlop={10}>
                    <Ionicons
                      name="close-circle"
                      size={19}
                      color={theme.textSecondary}
                    />
                  </Pressable>
                )}
              </View>

              <View style={styles.listHeader}>
                <View style={styles.sectionTitleContainer}>
                  <Text
                    style={[
                      styles.sectionTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    All Foods
                  </Text>

                  <Text
                    style={[
                      styles.sectionSubtitle,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    Select a food to learn more
                  </Text>
                </View>

                <Text
                  style={[
                    styles.countText,
                    {
                      color: theme.textSecondary,
                      backgroundColor: theme.surfaceSecondary,
                    },
                  ]}
                >
                  {filteredFoods.length}
                </Text>
              </View>
            </>
          }
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => openFood(item)}
              accessibilityRole="button"
              accessibilityLabel={`View information about ${item}`}
              style={({ pressed }) => [
                styles.foodCard,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  opacity: pressed ? 0.72 : 1,
                },
              ]}
            >
              <View
                style={[
                  styles.foodNumber,
                  {
                    backgroundColor: theme.surfaceSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.foodNumberText,
                    {
                      color: theme.primary,
                    },
                  ]}
                >
                  {index + 1}
                </Text>
              </View>

              <View
                style={[
                  styles.foodIcon,
                  {
                    backgroundColor: theme.primaryLight,
                  },
                ]}
              >
                <Text style={styles.foodEmoji}>{getFoodEmoji(item)}</Text>
              </View>

              <View style={styles.foodContent}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.foodName,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {item}
                </Text>

                <Text
                  style={[
                    styles.foodHint,
                    {
                      color: theme.textSecondary,
                    },
                  ]}
                >
                  Explore food information
                </Text>
              </View>

              <View
                style={[
                  styles.foodArrow,
                  {
                    backgroundColor: theme.surfaceSecondary,
                  },
                ]}
              >
                <Ionicons
                  name="chevron-forward"
                  size={17}
                  color={theme.primary}
                />
              </View>
            </Pressable>
          )}
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
                <Ionicons
                  name="search-outline"
                  size={29}
                  color={theme.primary}
                />
              </View>

              <Text
                style={[
                  styles.emptyTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                No food found
              </Text>

              <Text
                style={[
                  styles.emptyText,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                We couldn't find a food matching your search. Try another food
                name.
              </Text>

              {search.length > 0 && (
                <Pressable
                  onPress={() => setSearch("")}
                  style={[
                    styles.resetButton,
                    {
                      backgroundColor: theme.primaryLight,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.resetButtonText,
                      {
                        color: theme.primary,
                      },
                    ]}
                  >
                    Clear Search
                  </Text>
                </Pressable>
              )}
            </View>
          }
          ListFooterComponent={
            filteredFoods.length > 0 ? (
              <View
                style={[
                  styles.footerCard,
                  {
                    backgroundColor: theme.surfaceSecondary,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={17}
                  color={theme.primary}
                />

                <Text
                  style={[
                    styles.footerText,
                    {
                      color: theme.textSecondary,
                    },
                  ]}
                >
                  Dietary Synergy provides food compatibility information based
                  on the available database.
                </Text>
              </View>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
}

type FoodDetailsProps = {
  food: string;
  theme: AppTheme;
  onBack: () => void;
};

function FoodDetails({ food, theme, onBack }: FoodDetailsProps) {
  return (
    <View
      style={[
        styles.detailsContainer,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <StatusBar
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <View style={styles.detailsHeader}>
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Back to food library"
          style={({ pressed }) => [
            styles.backButton,
            {
              backgroundColor: theme.surfaceSecondary,
              borderColor: theme.border,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Ionicons name="arrow-back" size={19} color={theme.primary} />
        </Pressable>

        <View style={styles.detailsHeaderTitleContainer}>
          <Text
            style={[
              styles.detailsHeaderTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Food Details
          </Text>

          <Text
            style={[
              styles.detailsHeaderSubtitle,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Dietary Synergy Food Library
          </Text>
        </View>
      </View>

      {/* =========================
          HERO
      ========================= */}
      <View
        style={[
          styles.detailsHero,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
          },
        ]}
      >
        <View
          style={[
            styles.detailsIcon,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Text style={styles.detailsFoodEmoji}>{getFoodEmoji(food)}</Text>
        </View>

        <Text
          style={[
            styles.detailsFoodName,
            {
              color: theme.text,
            },
          ]}
        >
          {food}
        </Text>

        <View
          style={[
            styles.databaseBadge,
            {
              backgroundColor: theme.surfaceSecondary,
            },
          ]}
        >
          <View
            style={[
              styles.databaseDot,
              {
                backgroundColor: theme.primary,
              },
            ]}
          />

          <Text
            style={[
              styles.databaseBadgeText,
              {
                color: theme.primary,
              },
            ]}
          >
            Available in Dietary Synergy
          </Text>
        </View>

        <Text
          style={[
            styles.detailsDescription,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          This food is included in the Dietary Synergy compatibility database.
        </Text>
      </View>

      {/* =========================
          COMPATIBILITY INFORMATION
      ========================= */}
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
          <Ionicons
            name="git-compare-outline"
            size={20}
            color={theme.primary}
          />
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
            Compatibility Information
          </Text>

          <Text
            style={[
              styles.infoText,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Use Food Checker to combine this food with other foods and view the
            available compatibility information.
          </Text>
        </View>
      </View>

      {/* =========================
          HOW IT WORKS
      ========================= */}
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
          <Ionicons name="sparkles-outline" size={20} color={theme.primary} />
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
            Explore Food Combinations
          </Text>

          <Text
            style={[
              styles.infoText,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Select this food together with other available foods in Food Checker
            to explore their recorded compatibility results.
          </Text>
        </View>
      </View>

      {/* =========================
          DATABASE NOTE
      ========================= */}
      <View
        style={[
          styles.noteCard,
          {
            backgroundColor: theme.surfaceSecondary,
            borderColor: theme.border,
          },
        ]}
      >
        <View
          style={[
            styles.noteIcon,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Ionicons name="book-outline" size={18} color={theme.primary} />
        </View>

        <Text
          style={[
            styles.noteText,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          Food Library information is based on the available Dietary Synergy
          database. It does not add information that is not present in the
          database.
        </Text>
      </View>
    </View>
  );
}
