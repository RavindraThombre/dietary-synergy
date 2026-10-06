import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import type { AppTheme } from "../../constants/theme";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

export default function AboutScreen({ theme, onBack }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        bounces
      >
        {/* Header */}
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
            <Ionicons name="arrow-back" size={18} color={theme.text} />

            <Text
              style={[
                styles.backText,
                {
                  color: theme.text,
                },
              ]}
            >
              Home
            </Text>
          </Pressable>
        </View>

        {/* Hero */}
        <View
          style={[
            styles.hero,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          {/* Logo */}
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

          {/* Brand */}
          <Text
            style={[
              styles.title,
              {
                color: theme.text,
              },
            ]}
          >
            Dietary Synergy
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: theme.primary,
              },
            ]}
          >
            Explore How Foods Work Together
          </Text>

          <Text
            style={[
              styles.description,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Dietary Synergy helps you explore food combinations and discover how
            different foods work together using information from our food
            compatibility database.
          </Text>

          {/* Brand Pill */}
          <View
            style={[
              styles.brandPill,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons name="leaf-outline" size={15} color={theme.primary} />

            <Text
              style={[
                styles.brandPillText,
                {
                  color: theme.primary,
                },
              ]}
            >
              FOOD · WELLNESS · DISCOVERY
            </Text>
          </View>
        </View>

        {/* What You Can Do */}
        <View style={styles.section}>
          <View style={styles.sectionLabelRow}>
            <View
              style={[
                styles.sectionDot,
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
            Explore your food combinations
          </Text>

          <Text
            style={[
              styles.sectionDescription,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Simple tools to help you explore food combinations and understand
            the information available for each combination.
          </Text>

          <View style={styles.featureList}>
            <FeatureCard
              theme={theme}
              icon="search-outline"
              title="Check Food Combinations"
              description="Search and check whether selected foods are compatible or incompatible."
            />

            <FeatureCard
              theme={theme}
              icon="bulb-outline"
              title="Understand the Reason"
              description="View the reason behind a compatibility result along with useful guidance."
            />

            <FeatureCard
              theme={theme}
              icon="book-outline"
              title="Explore Food Information"
              description="Explore food combinations based on the information available in the compatibility database."
            />
          </View>
        </View>

        {/* How It Works */}
        <View
          style={[
            styles.howItWorks,
            {
              backgroundColor: theme.surfaceSecondary,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.howItWorksTitle,
              {
                color: theme.text,
              },
            ]}
          >
            How Dietary Synergy works
          </Text>

          <Step
            theme={theme}
            number="1"
            icon="restaurant-outline"
            title="Choose your foods"
            description="Select 2, 3, or 4 foods you want to explore."
          />

          <Step
            theme={theme}
            number="2"
            icon="search-outline"
            title="Check the combination"
            description="Dietary Synergy searches the available compatibility information."
          />

          <Step
            theme={theme}
            number="3"
            icon="sparkles-outline"
            title="Explore the result"
            description="Review the compatibility result and the available explanation."
          />
        </View>

        {/* Disclaimer */}
        <View
          style={[
            styles.infoBox,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <View
            style={[
              styles.infoIconContainer,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons
              name="information-circle-outline"
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
              Important information
            </Text>

            <Text
              style={[
                styles.infoText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Dietary Synergy provides informational food-combination guidance.
              It is not a substitute for professional medical or dietary advice.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Image
            source={require("@/assets/images/dietary-synergy-logo.png")}
            style={styles.footerLogo}
            contentFit="contain"
          />

          <Text
            style={[
              styles.footerTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Dietary Synergy
          </Text>

          <Text
            style={[
              styles.footerText,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Explore How Foods Work Together
          </Text>

          <View style={styles.footerLine}>
            <View
              style={[
                styles.footerLinePart,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Ionicons name="leaf-outline" size={15} color={theme.primary} />

            <View
              style={[
                styles.footerLinePart,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

type FeatureCardProps = {
  theme: AppTheme;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  description: string;
};

function FeatureCard({ theme, icon, title, description }: FeatureCardProps) {
  return (
    <View
      style={[
        styles.featureCard,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
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
        <Ionicons name={icon} size={22} color={theme.primary} />
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
          {title}
        </Text>

        <Text
          style={[
            styles.featureDescription,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          {description}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
    </View>
  );
}

type StepProps = {
  theme: AppTheme;
  number: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  description: string;
};

function Step({ theme, number, icon, title, description }: StepProps) {
  return (
    <View style={styles.step}>
      <View
        style={[
          styles.stepNumber,
          {
            backgroundColor: theme.primary,
          },
        ]}
      >
        <Text style={styles.stepNumberText}>{number}</Text>
      </View>

      <View
        style={[
          styles.stepIcon,
          {
            backgroundColor: theme.primaryLight,
          },
        ]}
      >
        <Ionicons name={icon} size={19} color={theme.primary} />
      </View>

      <View style={styles.stepContent}>
        <Text
          style={[
            styles.stepTitle,
            {
              color: theme.text,
            },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.stepDescription,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 45,
  },

  header: {
    marginBottom: 18,
  },

  backButton: {
    alignSelf: "flex-start",
    minHeight: 42,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  backText: {
    fontSize: 14,
    fontWeight: "700",
  },

  hero: {
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 22,
    paddingVertical: 28,
    alignItems: "center",
  },

  logoContainer: {
    width: 145,
    height: 145,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 8,
    marginBottom: 18,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },

  description: {
    marginTop: 15,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
  },

  brandPill: {
    marginTop: 18,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  brandPillText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  section: {
    marginTop: 28,
  },

  sectionLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 8,
  },

  sectionEyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  sectionDescription: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 15,
  },

  featureList: {
    gap: 11,
  },

  featureCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  featureIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  featureContent: {
    flex: 1,
    marginRight: 8,
  },

  featureTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  featureDescription: {
    fontSize: 12,
    lineHeight: 18,
  },

  howItWorks: {
    marginTop: 24,
    borderWidth: 1,
    borderRadius: 20,
    padding: 17,
  },

  howItWorksTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 15,
  },

  step: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  stepNumber: {
    width: 27,
    height: 27,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },

  stepIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 3,
  },

  stepDescription: {
    fontSize: 11,
    lineHeight: 17,
  },

  infoBox: {
    marginTop: 22,
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  infoIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 4,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 18,
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerLogo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  footerText: {
    marginTop: 4,
    fontSize: 11,
  },

  footerLine: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  footerLinePart: {
    width: 42,
    height: 1,
  },
});
