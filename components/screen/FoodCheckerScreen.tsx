import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import type { AppTheme } from "../../constants/theme";

import {
  findFoodCompatibility,
  getFoodOptionsByCount,
  getFourFoodOptions,
  type FoodCombinationResult,
} from "../../service/foodCompatibility";

import { styles } from "../../styles/FoodCheckerScreen.styles";

import FoodResultScreen from "./FoodResultScreen";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

type FoodCount = 2 | 3 | 4;
type FoodSlot = 0 | 1 | 2 | 3;

const FOOD_COUNTS: FoodCount[] = [2, 3, 4];

const FOOD_LABELS = ["Food 1", "Food 2", "Food 3", "Food 4"];

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
  if (value.includes("pumpkin")) return "🎃";
  if (value.includes("mushroom")) return "🍄";
  if (value.includes("eggplant")) return "🍆";
  if (value.includes("brinjal")) return "🍆";
  if (value.includes("okra")) return "🥬";

  // Dairy
  if (value.includes("milk")) return "🥛";
  if (value.includes("cheese")) return "🧀";
  if (value.includes("yogurt")) return "🥛";
  if (value.includes("curd")) return "🥛";
  if (value.includes("butter")) return "🧈";
  if (value.includes("paneer")) return "🧀";

  // Eggs
  if (value.includes("egg")) return "🥚";

  // Grains
  if (value.includes("rice")) return "🍚";
  if (value.includes("wheat")) return "🌾";
  if (value.includes("oat")) return "🌾";
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
  if (value.includes("soy")) return "🫘";
  if (value.includes("tofu")) return "🫘";

  // Herbs and spices
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

  // Drinks
  if (value.includes("coffee")) return "☕";
  if (value.includes("tea")) return "🍵";
  if (value.includes("juice")) return "🧃";
  if (value.includes("water")) return "💧";

  // Sweeteners
  if (value.includes("honey")) return "🍯";
  if (value.includes("sugar")) return "🍬";
  if (value.includes("chocolate")) return "🍫";

  return "🍽️";
};

export default function FoodCheckerScreen({ theme, onBack }: Props) {
  const [foodCount, setFoodCount] = useState<FoodCount | null>(null);
  const [foods, setFoods] = useState<string[]>([]);
  const [activeSlot, setActiveSlot] = useState<FoodSlot | null>(null);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [compatibilityResult, setCompatibilityResult] =
    useState<FoodCombinationResult | null>(null);

  const foodOptions = useMemo(() => {
    if (foodCount === null) {
      return [];
    }

    return getFoodOptionsByCount(foodCount);
  }, [foodCount]);

  const currentFoodOptions = useMemo(() => {
    if (foodCount !== 4) {
      return foodOptions;
    }

    // 4-food: Food 1
    if (activeSlot === 0) {
      return getFourFoodOptions(0);
    }

    // 4-food: Food 2 depends on selected Food 1
    if (activeSlot === 1) {
      return getFourFoodOptions(1, foods[0]);
    }

    // 4-food: Food 3 and Food 4
    return foodOptions;
  }, [foodCount, activeSlot, foods, foodOptions]);

  const filteredFoods = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return currentFoodOptions;
    }

    return currentFoodOptions.filter((food) =>
      food.toLowerCase().includes(query),
    );
  }, [currentFoodOptions, search]);

  const selectFoodCount = (count: FoodCount) => {
    setFoodCount(count);
    setFoods(Array(count).fill(""));
    setCompatibilityResult(null);
    setShowResult(false);
    setActiveSlot(null);
    setSearch("");
  };

  const openSelector = (slot: FoodSlot) => {
    setActiveSlot(slot);
    setSearch("");
  };

  const selectFood = (food: string) => {
    if (activeSlot === null) {
      return;
    }

    setFoods((previous) => {
      const updated = [...previous];
      updated[activeSlot] = food;
      return updated;
    });

    setActiveSlot(null);
    setSearch("");
    setCompatibilityResult(null);
    setShowResult(false);
  };

  const isFoodAlreadySelected = (food: string) => {
    if (activeSlot === null) {
      return false;
    }

    const normalizedFood = food.trim().toLowerCase();

    return foods.some(
      (selectedFood, index) =>
        index !== activeSlot &&
        selectedFood.trim().toLowerCase() === normalizedFood,
    );
  };

  const checkCompatibility = () => {
    if (foodCount === null) {
      return;
    }

    const selectedFoods = foods.map((food) => food.trim()).filter(Boolean);

    if (selectedFoods.length !== foodCount) {
      return;
    }

    const result = findFoodCompatibility(selectedFoods);

    setCompatibilityResult(result);
    setShowResult(true);
  };

  const clearFoods = () => {
    if (foodCount === null) {
      return;
    }

    setFoods(Array(foodCount).fill(""));
    setCompatibilityResult(null);
    setShowResult(false);
  };

  const changeFoodCount = () => {
    setFoodCount(null);
    setFoods([]);
    setCompatibilityResult(null);
    setShowResult(false);
    setActiveSlot(null);
    setSearch("");
  };

  const allFoodsSelected =
    foodCount !== null &&
    foods.length === foodCount &&
    foods.every((food) => food.trim().length > 0);

  const selectedFoodCount = foods.filter(
    (food) => food.trim().length > 0,
  ).length;

  const progress = foodCount !== null ? selectedFoodCount / foodCount : 0;

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

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <View style={styles.header}>
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
            <Ionicons
              name="git-compare-outline"
              size={23}
              color={theme.primary}
            />
          </View>

          <View style={styles.headerText}>
            <Text
              numberOfLines={1}
              style={[
                styles.appName,
                {
                  color: theme.text,
                },
              ]}
            >
              Food Checker
            </Text>

            <Text
              numberOfLines={1}
              style={[
                styles.tagline,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Explore food combinations
            </Text>
          </View>
        </View>

        {/* =================================================
            HERO
        ================================================= */}

        <View style={styles.hero}>
          <View
            style={[
              styles.heroBadge,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <View
              style={[
                styles.heroBadgeDot,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Text
              style={[
                styles.heroBadgeText,
                {
                  color: theme.primary,
                },
              ]}
            >
              DIETARY SYNERGY
            </Text>
          </View>

          <Text
            style={[
              styles.heroTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Discover how your foods work together.
          </Text>

          <Text
            style={[
              styles.heroDescription,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Choose 2, 3, or 4 foods and explore their recorded compatibility
            information.
          </Text>
        </View>

        {/* =================================================
            MAIN CARD
        ================================================= */}

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          {/* Card header */}

          <View style={styles.cardHeader}>
            <View>
              <Text
                style={[
                  styles.cardTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Build a Combination
              </Text>

              <Text
                style={[
                  styles.cardSubtitle,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                {foodCount === null
                  ? "Start by choosing how many foods you want to check."
                  : `Select ${foodCount} foods to continue.`}
              </Text>
            </View>
          </View>

          {/* =================================================
              STEP 1
          ================================================= */}

          {foodCount === null && (
            <View style={styles.countSection}>
              <View
                style={[
                  styles.countIcon,
                  {
                    backgroundColor: theme.primaryLight,
                  },
                ]}
              >
                <Ionicons
                  name="layers-outline"
                  size={24}
                  color={theme.primary}
                />
              </View>

              <Text
                style={[
                  styles.countTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                How many foods?
              </Text>

              <Text
                style={[
                  styles.countDescription,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                Choose the number of foods in your combination.
              </Text>

              <View style={styles.countOptions}>
                {FOOD_COUNTS.map((count) => (
                  <Pressable
                    key={count}
                    onPress={() => selectFoodCount(count)}
                    style={({ pressed }) => [
                      styles.countButton,
                      {
                        backgroundColor: theme.input,
                        borderColor: theme.border,
                        opacity: pressed ? 0.72 : 1,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.countButtonIcon,
                        {
                          backgroundColor: theme.primaryLight,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.countButtonNumber,
                          {
                            color: theme.primary,
                          },
                        ]}
                      >
                        {count}
                      </Text>
                    </View>

                    <View style={styles.countButtonContent}>
                      <Text
                        style={[
                          styles.countButtonTitle,
                          {
                            color: theme.text,
                          },
                        ]}
                      >
                        {count}-Food Combination
                      </Text>

                      <Text
                        style={[
                          styles.countButtonDescription,
                          {
                            color: theme.textSecondary,
                          },
                        ]}
                      >
                        Check {count} foods together
                      </Text>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color={theme.textSecondary}
                    />
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* =================================================
              STEP 2
          ================================================= */}

          {foodCount !== null && (
            <>
              {/* Selected count */}

              <View
                style={[
                  styles.selectedCountCard,
                  {
                    backgroundColor: theme.surfaceSecondary,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.selectedCountIcon,
                    {
                      backgroundColor: theme.primaryLight,
                    },
                  ]}
                >
                  <Ionicons
                    name="layers-outline"
                    size={20}
                    color={theme.primary}
                  />
                </View>

                <View style={styles.selectedCountContent}>
                  <Text
                    style={[
                      styles.selectedCountTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    {foodCount}-Food Combination
                  </Text>

                  <Text
                    style={[
                      styles.selectedCountText,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    {selectedFoodCount} of {foodCount} foods selected
                  </Text>
                </View>

                <Pressable
                  onPress={changeFoodCount}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel="Change food count"
                >
                  <Ionicons
                    name="create-outline"
                    size={20}
                    color={theme.primary}
                  />
                </Pressable>
              </View>

              {/* Progress */}

              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text
                    style={[
                      styles.progressLabel,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    Selection progress
                  </Text>

                  <Text
                    style={[
                      styles.progressValue,
                      {
                        color: theme.primary,
                      },
                    ]}
                  >
                    {selectedFoodCount}/{foodCount}
                  </Text>
                </View>

                <View
                  style={[
                    styles.progressTrack,
                    {
                      backgroundColor: theme.surfaceSecondary,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.progressFill,
                      {
                        backgroundColor: theme.primary,
                        width: `${progress * 100}%`,
                      },
                    ]}
                  />
                </View>
              </View>

              {/* Food fields */}

              <View style={styles.foodFields}>
                {foods.map((food, index) => (
                  <View key={`food-${index}`} style={styles.fieldContainer}>
                    <View style={styles.fieldHeader}>
                      <View
                        style={[
                          styles.fieldNumber,
                          {
                            backgroundColor: food
                              ? theme.primaryLight
                              : theme.surfaceSecondary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.fieldNumberText,
                            {
                              color: food ? theme.primary : theme.textSecondary,
                            },
                          ]}
                        >
                          {index + 1}
                        </Text>
                      </View>

                      <Text
                        style={[
                          styles.fieldLabel,
                          {
                            color: theme.text,
                          },
                        ]}
                      >
                        {FOOD_LABELS[index]}
                      </Text>
                    </View>

                    <Pressable
                      style={({ pressed }) => [
                        styles.selector,
                        {
                          backgroundColor: theme.input,
                          borderColor: food ? theme.primary : theme.border,
                          opacity: pressed ? 0.75 : 1,
                        },
                      ]}
                      onPress={() => openSelector(index as FoodSlot)}
                    >
                      <View style={styles.selectorContent}>
                        <View
                          style={[
                            styles.selectorIcon,
                            {
                              backgroundColor: food
                                ? theme.primaryLight
                                : theme.surfaceSecondary,
                            },
                          ]}
                        >
                          <Text style={styles.selectorEmoji}>
                            {food ? getFoodEmoji(food) : "🍽️"}
                          </Text>
                        </View>

                        <View style={styles.selectorTextContainer}>
                          <Text
                            numberOfLines={1}
                            style={[
                              styles.selectorText,
                              {
                                color: food ? theme.text : theme.textSecondary,
                              },
                            ]}
                          >
                            {food || "Search and select a food"}
                          </Text>

                          {food && (
                            <Text
                              style={[
                                styles.selectorHint,
                                {
                                  color: theme.textSecondary,
                                },
                              ]}
                            >
                              Tap to change
                            </Text>
                          )}
                        </View>
                      </View>

                      <Ionicons
                        name="chevron-down"
                        size={19}
                        color={theme.textSecondary}
                      />
                    </Pressable>
                  </View>
                ))}
              </View>

              {/* Check button */}

              <Pressable
                disabled={!allFoodsSelected}
                onPress={checkCompatibility}
                style={({ pressed }) => [
                  styles.primaryButton,
                  {
                    backgroundColor: theme.primary,
                    opacity: !allFoodsSelected ? 0.4 : pressed ? 0.75 : 1,
                  },
                ]}
              >
                <View style={styles.checkButtonContent}>
                  <Ionicons
                    name="sparkles-outline"
                    size={19}
                    color={theme.mode === "dark" ? "#101812" : "#FFFFFF"}
                  />

                  <Text
                    style={[
                      styles.primaryButtonText,
                      {
                        color: theme.mode === "dark" ? "#101812" : "#FFFFFF",
                      },
                    ]}
                  >
                    Check Compatibility
                  </Text>
                </View>
              </Pressable>

              {/* Clear */}

              <Pressable onPress={clearFoods} style={styles.clearButton}>
                <Text
                  style={[
                    styles.clearText,
                    {
                      color: theme.primary,
                    },
                  ]}
                >
                  Clear selections
                </Text>
              </Pressable>
            </>
          )}
        </View>

        {/* =================================================
            RESULT
        ================================================= */}

        {showResult && (
          <FoodResultScreen
            theme={theme}
            foods={foods}
            result={compatibilityResult}
          />
        )}

        {/* =================================================
            FOOTER
        ================================================= */}

        <Text
          style={[
            styles.footer,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          Dietary Synergy · Explore How Foods Work Together
        </Text>
      </ScrollView>

      {/* =================================================
          FOOD SELECTOR MODAL
      ================================================= */}

      <Modal
        visible={activeSlot !== null}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setActiveSlot(null);
          setSearch("");
        }}
      >
        <View
          style={[
            styles.modalOverlay,
            {
              backgroundColor: theme.overlay,
            },
          ]}
        >
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.surface,
              },
            ]}
          >
            {/* Modal header */}

            <View style={styles.modalHeader}>
              <View style={styles.modalTitleContainer}>
                <View
                  style={[
                    styles.modalIcon,
                    {
                      backgroundColor: theme.primaryLight,
                    },
                  ]}
                >
                  <Ionicons
                    name="nutrition-outline"
                    size={20}
                    color={theme.primary}
                  />
                </View>

                <View style={styles.modalTitleContent}>
                  <Text
                    style={[
                      styles.modalTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    Select a Food
                  </Text>

                  {activeSlot !== null && (
                    <Text
                      style={[
                        styles.modalSubtitle,
                        {
                          color: theme.textSecondary,
                        },
                      ]}
                    >
                      Choosing {FOOD_LABELS[activeSlot]}
                    </Text>
                  )}
                </View>
              </View>

              <Pressable
                onPress={() => {
                  setActiveSlot(null);
                  setSearch("");
                }}
                accessibilityRole="button"
                accessibilityLabel="Close food selector"
                style={[
                  styles.modalCloseButton,
                  {
                    backgroundColor: theme.surfaceSecondary,
                  },
                ]}
              >
                <Ionicons name="close" size={21} color={theme.textSecondary} />
              </Pressable>
            </View>

            {/* Search */}

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
                size={19}
                color={theme.textSecondary}
              />

              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search food..."
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.searchInput,
                  {
                    color: theme.text,
                  },
                ]}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
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

            {/* Search result count */}

            <View style={styles.modalResultHeader}>
              <Text
                style={[
                  styles.modalResultText,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                {filteredFoods.length} foods available
              </Text>
            </View>

            {/* Food list */}

            <FlatList
              data={filteredFoods}
              keyExtractor={(item) => item}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              initialNumToRender={30}
              maxToRenderPerBatch={50}
              windowSize={10}
              renderItem={({ item }) => {
                const alreadySelected = isFoodAlreadySelected(item);

                const isSelected =
                  activeSlot !== null && foods[activeSlot] === item;

                return (
                  <Pressable
                    disabled={alreadySelected}
                    onPress={() => selectFood(item)}
                    style={({ pressed }) => [
                      styles.foodOption,
                      {
                        borderBottomColor: theme.border,
                        backgroundColor: isSelected
                          ? theme.primaryLight
                          : pressed
                            ? theme.surfaceSecondary
                            : "transparent",
                        opacity: alreadySelected ? 0.38 : 1,
                      },
                    ]}
                  >
                    <View style={styles.foodOptionContent}>
                      <View
                        style={[
                          styles.foodOptionIcon,
                          {
                            backgroundColor: theme.primaryLight,
                          },
                        ]}
                      >
                        <Text style={styles.foodOptionEmoji}>
                          {getFoodEmoji(item)}
                        </Text>
                      </View>

                      <View style={styles.foodOptionTextContainer}>
                        <Text
                          numberOfLines={2}
                          style={[
                            styles.foodOptionText,
                            {
                              color: theme.text,
                            },
                          ]}
                        >
                          {item}
                        </Text>

                        {alreadySelected && (
                          <Text
                            style={[
                              styles.alreadySelectedText,
                              {
                                color: theme.textSecondary,
                              },
                            ]}
                          >
                            Already selected
                          </Text>
                        )}
                      </View>
                    </View>

                    {isSelected ? (
                      <View
                        style={[
                          styles.selectedCheck,
                          {
                            backgroundColor: theme.primaryLight,
                          },
                        ]}
                      >
                        <Ionicons
                          name="checkmark"
                          size={16}
                          color={theme.primary}
                        />
                      </View>
                    ) : (
                      <Ionicons
                        name="chevron-forward"
                        size={18}
                        color={theme.textSecondary}
                      />
                    )}
                  </Pressable>
                );
              }}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
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
                      size={27}
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
                    Try searching with a different food name.
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
