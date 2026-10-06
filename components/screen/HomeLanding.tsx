import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import type { AppTheme } from "../../constants/theme";
import styles from "../../styles/HomeLanding.styles";

import TestimonialCard from "./TestimonialCard";
import ThemeToggle from "./ThemeToggle";

type Props = {
  theme: AppTheme;
  onOpenMenu: () => void;
  onOpenChecker: () => void;
  onOpenFoodGuide: () => void;
  onOpenHistory: () => void;
  onOpenFavorites: () => void;
  onToggleTheme: () => void;
};

// ---------------------------------------------------------
// Testimonials
// ---------------------------------------------------------

const discoveryExperiences = [
  {
    name: "Aarav",
    quote:
      "I started by checking foods I already eat together. It helped me explore combinations I had never thought about.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Meera",
    quote:
      "Searching for a food and seeing its possible combinations makes exploring everyday ingredients much more interesting.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
  },
  {
    name: "Riya",
    quote:
      "I like being able to select multiple foods and quickly discover whether that combination is recorded in the database.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
  },
];

// ---------------------------------------------------------
// Hero Images
// ---------------------------------------------------------

const heroImages = [
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200",
];

// ---------------------------------------------------------
// Feature Highlights
// ---------------------------------------------------------

const foodHighlights = [
  {
    title: "Food Checker",
    description: "Check compatibility between 2, 3, or 4 foods.",
    icon: "git-compare-outline" as const,
    screen: "checker",
  },
  {
    title: "Food Library",
    description: "Explore foods available in the compatibility database.",
    icon: "nutrition-outline" as const,
    screen: "food-guide",
  },
  {
    title: "History",
    description: "View your recently checked combinations.",
    icon: "time-outline" as const,
    screen: "history",
  },
  {
    title: "Favorites",
    description: "Quickly access your saved food combinations.",
    icon: "star-outline" as const,
    screen: "favorites",
  },
];

export default function HomeLanding({
  theme,
  onOpenMenu,
  onOpenChecker,
  onOpenFoodGuide,
  onOpenHistory,
  onOpenFavorites,
  onToggleTheme,
}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const card1Anim = useRef(new Animated.Value(20)).current;
  const card2Anim = useRef(new Animated.Value(20)).current;
  const card3Anim = useRef(new Animated.Value(20)).current;
  const card4Anim = useRef(new Animated.Value(20)).current;

  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroImageOpacity = useRef(new Animated.Value(1)).current;

  const heroTextOpacity = useRef(new Animated.Value(0)).current;

  const heroTextTranslate = useRef(new Animated.Value(15)).current;

  // ---------------------------------------------------------
  // Hero image carousel
  // ---------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(heroImageOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),

        Animated.timing(heroImageOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();

      setHeroImageIndex((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroImageOpacity]);

  // ---------------------------------------------------------
  // Initial page animation
  // ---------------------------------------------------------

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 550,
        useNativeDriver: true,
      }),

      Animated.parallel([
        Animated.timing(heroTextOpacity, {
          toValue: 1,
          duration: 700,
          delay: 250,
          useNativeDriver: true,
        }),

        Animated.timing(heroTextTranslate, {
          toValue: 0,
          duration: 700,
          delay: 250,
          useNativeDriver: true,
        }),
      ]),

      Animated.sequence([
        Animated.delay(150),

        Animated.stagger(100, [
          Animated.timing(card1Anim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: true,
          }),

          Animated.timing(card2Anim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: true,
          }),

          Animated.timing(card3Anim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: true,
          }),

          Animated.timing(card4Anim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, [
    fadeAnim,
    heroTextOpacity,
    heroTextTranslate,
    card1Anim,
    card2Anim,
    card3Anim,
    card4Anim,
  ]);

  // ---------------------------------------------------------
  // Feature card animations
  // ---------------------------------------------------------

  const cardAnimations = [card1Anim, card2Anim, card3Anim, card4Anim];

  // ---------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------

  const handleFeaturePress = (screen: string) => {
    switch (screen) {
      case "checker":
        onOpenChecker();
        break;

      case "food-guide":
        onOpenFoodGuide();
        break;

      case "history":
        onOpenHistory();
        break;

      case "favorites":
        onOpenFavorites();
        break;
    }
  };

  // ---------------------------------------------------------
  // Render
  // ---------------------------------------------------------

  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =====================================================
            Header
        ===================================================== */}

        <View
          style={[
            styles.header,
            {
              borderBottomColor: theme.border,
            },
          ]}
        >
          <Pressable
            onPress={onOpenMenu}
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            style={({ pressed }) => [
              styles.iconButton,
              {
                backgroundColor: theme.surfaceSecondary,
                borderColor: theme.border,
                opacity: pressed ? 0.65 : 1,
              },
            ]}
          >
            <Ionicons name="menu-outline" size={22} color={theme.text} />
          </Pressable>

          <View style={styles.brand}>
            <Text
              numberOfLines={1}
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
              numberOfLines={1}
              style={[
                styles.brandSubtitle,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              FOOD · COMPATIBILITY · DISCOVERY
            </Text>
          </View>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </View>

        {/* =====================================================
            Hero
        ===================================================== */}

        <View style={styles.hero}>
          {/* Animated background image */}

          <Animated.View
            style={[
              styles.heroImageContainer,
              {
                opacity: heroImageOpacity,
              },
            ]}
          >
            <ImageBackground
              source={{
                uri: heroImages[heroImageIndex],
              }}
              style={styles.heroImageBackground}
              imageStyle={styles.heroImage}
            />
          </Animated.View>

          {/* Dark image overlay */}

          <View style={styles.heroOverlay} />

          {/* Hero content */}

          <Animated.View
            style={[
              styles.heroContent,
              {
                opacity: heroTextOpacity,
                transform: [
                  {
                    translateY: heroTextTranslate,
                  },
                ],
              },
            ]}
          >
            <View style={styles.heroTag}>
              <Ionicons name="sparkles-outline" size={14} color="#E4F4DF" />

              <Text style={styles.heroTagText}>FOOD COMPATIBILITY</Text>
            </View>

            <Text style={styles.heroTitle}>
              Discover the synergy{"\n"}between your foods.
            </Text>

            <Text style={styles.heroDescription}>
              Discover food combinations and explore how foods work together.
            </Text>

            <Pressable
              onPress={onOpenChecker}
              accessibilityRole="button"
              accessibilityLabel="Open food checker"
              style={({ pressed }) => [
                styles.heroButton,
                {
                  transform: [
                    {
                      scale: pressed ? 0.97 : 1,
                    },
                  ],
                },
              ]}
            >
              <Ionicons name="search-outline" size={18} color="#245A35" />

              <Text style={styles.heroButtonText}>Check compatibility</Text>

              <Ionicons name="arrow-forward" size={17} color="#245A35" />
            </Pressable>
          </Animated.View>

          {/* Carousel indicators */}

          <View style={styles.heroIndicators}>
            {heroImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.heroIndicator,
                  index === heroImageIndex && styles.heroIndicatorActive,
                ]}
              />
            ))}
          </View>
        </View>

        {/* =====================================================
            Intro
        ===================================================== */}

        <Animated.View
          style={[
            styles.introSection,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <View style={styles.sectionLabelRow}>
            <View
              style={[
                styles.sectionLabelDot,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Text
              style={[
                styles.sectionEyebrow,
                {
                  color: theme.primary,
                },
              ]}
            >
              EXPLORE YOUR PLATE
            </Text>
          </View>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Simple food discovery
          </Text>

          <Text
            style={[
              styles.sectionDescription,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Choose 2, 3, or 4 foods and explore their compatibility information
            in seconds.
          </Text>
        </Animated.View>

        {/* =====================================================
            Main Food Checker
        ===================================================== */}

        <Pressable
          onPress={onOpenChecker}
          accessibilityRole="button"
          accessibilityLabel="Open Food Checker"
          style={({ pressed }) => [
            styles.checkerCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
              transform: [
                {
                  scale: pressed ? 0.985 : 1,
                },
              ],
            },
          ]}
        >
          <View
            style={[
              styles.checkerIcon,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons
              name="restaurant-outline"
              size={26}
              color={theme.primary}
            />
          </View>

          <View style={styles.checkerContent}>
            <View style={styles.cardTitleRow}>
              <Text
                style={[
                  styles.checkerTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Food Checker
              </Text>

              <View
                style={[
                  styles.newBadge,
                  {
                    backgroundColor: theme.primaryLight,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.newBadgeText,
                    {
                      color: theme.primary,
                    },
                  ]}
                >
                  CORE
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.checkerDescription,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Check compatibility between 2–4 foods.
            </Text>
          </View>

          <View
            style={[
              styles.cardArrow,
              {
                backgroundColor: theme.surfaceSecondary,
              },
            ]}
          >
            <Ionicons name="arrow-forward" size={18} color={theme.primary} />
          </View>
        </Pressable>

        {/* =====================================================
            Feature Highlights
        ===================================================== */}

        <View style={styles.featuresSection}>
          <View style={styles.sectionLabelRow}>
            <View
              style={[
                styles.sectionLabelDot,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Text
              style={[
                styles.sectionEyebrow,
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
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Everything in one place
          </Text>

          <View style={styles.featureList}>
            {foodHighlights.map((item, index) => (
              <Animated.View
                key={item.title}
                style={{
                  opacity: fadeAnim,
                  transform: [
                    {
                      translateY: cardAnimations[index],
                    },
                  ],
                }}
              >
                <Pressable
                  onPress={() => handleFeaturePress(item.screen)}
                  accessibilityRole="button"
                  accessibilityLabel={`Open ${item.title}`}
                  style={({ pressed }) => [
                    styles.featureCard,
                    {
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                      opacity: pressed ? 0.75 : 1,
                      transform: [
                        {
                          scale: pressed ? 0.98 : 1,
                        },
                      ],
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.featureIcon,
                      {
                        backgroundColor: theme.primaryLight,
                      },
                    ]}
                  >
                    <Ionicons
                      name={item.icon}
                      size={21}
                      color={theme.primary}
                    />
                  </View>

                  <View style={styles.featureContent}>
                    <Text
                      style={[
                        styles.featureTitle,
                        {
                          color: theme.text,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={[
                        styles.featureDescription,
                        {
                          color: theme.textSecondary,
                        },
                      ]}
                    >
                      {item.description}
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color={theme.textSecondary}
                  />
                </Pressable>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* =====================================================
            Community Stories
        ===================================================== */}

        <View style={styles.testimonialHeader}>
          <View style={styles.sectionLabelRow}>
            <View
              style={[
                styles.sectionLabelDot,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Text
              style={[
                styles.sectionEyebrow,
                {
                  color: theme.primary,
                },
              ]}
            >
              COMMUNITY STORIES
            </Text>
          </View>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Food discovery experiences
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.testimonialList}
        >
          {discoveryExperiences.map((item) => (
            <TestimonialCard key={item.name} {...item} theme={theme} />
          ))}
        </ScrollView>

        {/* =====================================================
            Footer
        ===================================================== */}

        <View style={styles.footer}>
          <Ionicons name="leaf-outline" size={16} color={theme.primary} />

          <Text
            style={[
              styles.footerText,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Dietary Synergy · Explore How Foods Work Together
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
