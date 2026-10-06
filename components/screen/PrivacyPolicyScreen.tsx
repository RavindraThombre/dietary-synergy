import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, ScrollView, Text, View } from "react-native";

import type { AppTheme } from "../../constants/theme";
import styles from "../../styles/PrivacyPolicyScreen.styles";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

const PrivacyPolicyScreen = ({ theme, onBack }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.surface,
            borderBottomColor: theme.border,
          },
        ]}
      >
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={({ pressed }) => [
            styles.backButton,
            {
              backgroundColor: theme.surfaceSecondary,
              borderColor: theme.border,
              opacity: pressed ? 0.65 : 1,
            },
          ]}
        >
          <Ionicons name="arrow-back" size={20} color={theme.text} />
        </Pressable>

        <View style={styles.headerBrand}>
          <View
            style={[
              styles.headerLogoContainer,
              {
                backgroundColor: theme.surfaceSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <Image
              source={require("@/assets/images/dietary-synergy-logo.png")}
              style={styles.headerLogo}
              contentFit="contain"
            />
          </View>

          <View style={styles.headerText}>
            <Text
              style={[
                styles.headerTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Privacy Policy
            </Text>

            <Text
              style={[
                styles.headerSubtitle,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Dietary Synergy
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.headerPrivacyBadge,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={17}
            color={theme.primary}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
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
          <View
            style={[
              styles.heroLogoContainer,
              {
                backgroundColor: theme.surfaceSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <Image
              source={require("@/assets/images/dietary-synergy-logo.png")}
              style={styles.heroLogo}
              contentFit="contain"
            />
          </View>

          <Text
            style={[
              styles.heroTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Your Privacy Matters
          </Text>

          <Text
            style={[
              styles.heroDescription,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            This Privacy Policy explains how Dietary Synergy handles information
            when you use the food combination checker, History, Favorites, and
            related features.
          </Text>

          <View
            style={[
              styles.updatedBadge,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons name="calendar-outline" size={15} color={theme.primary} />

            <Text
              style={[
                styles.updatedBadgeText,
                {
                  color: theme.primary,
                },
              ]}
            >
              Last updated: October 2026
            </Text>
          </View>
        </View>

        {/* Privacy Highlights */}
        <View style={styles.highlightsSection}>
          <Text
            style={[
              styles.sectionEyebrow,
              {
                color: theme.primary,
              },
            ]}
          >
            AT A GLANCE
          </Text>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Privacy highlights
          </Text>

          <View style={styles.highlightGrid}>
            <HighlightCard
              theme={theme}
              icon="phone-portrait-outline"
              title="Local History"
              description="Your checked combinations can be stored locally on your device."
            />

            <HighlightCard
              theme={theme}
              icon="heart-outline"
              title="Local Favorites"
              description="Favorites are stored locally for convenient access."
            />

            <HighlightCard
              theme={theme}
              icon="person-remove-outline"
              title="No Account Required"
              description="The core food checker does not require an account."
            />

            <HighlightCard
              theme={theme}
              icon="shield-outline"
              title="No Intentional Sale"
              description="The app does not intentionally sell your personal information."
            />
          </View>
        </View>

        {/* 01 Introduction */}
        <Section
          theme={theme}
          number="01"
          icon="information-circle-outline"
          title="Introduction"
        >
          <Paragraph theme={theme}>
            Dietary Synergy is a food combination checking application designed
            to help users explore compatibility information between different
            foods.
          </Paragraph>

          <Paragraph theme={theme}>
            We aim to collect and use only the information necessary to provide
            the features described in this Privacy Policy.
          </Paragraph>
        </Section>

        {/* 02 Information We Collect */}
        <Section
          theme={theme}
          number="02"
          icon="document-text-outline"
          title="Information We Collect"
        >
          <Paragraph theme={theme}>
            Dietary Synergy may store information related to your use of the
            application, including:
          </Paragraph>

          <Bullet theme={theme}>
            Food combinations that you check using the Food Checker.
          </Bullet>

          <Bullet theme={theme}>
            Recently checked combinations saved in your local History.
          </Bullet>

          <Bullet theme={theme}>
            Food combinations that you choose to save to Favorites.
          </Bullet>

          <Paragraph theme={theme}>
            The core food compatibility checker does not require you to provide
            personal information such as your name, phone number, email address,
            or home address.
          </Paragraph>
        </Section>

        {/* 03 Local Storage */}
        <Section
          theme={theme}
          number="03"
          icon="phone-portrait-outline"
          title="Local Storage"
        >
          <Paragraph theme={theme}>
            History and Favorites are stored locally on your device using
            application storage.
          </Paragraph>

          <Paragraph theme={theme}>
            This local information is used to provide features such as reviewing
            recently checked combinations and accessing combinations you have
            saved as Favorites.
          </Paragraph>

          <Paragraph theme={theme}>
            Local History and Favorites are not intended to function as a
            cloud-based account or synchronization service.
          </Paragraph>
        </Section>

        {/* 04 Food Compatibility Data */}
        <Section
          theme={theme}
          number="04"
          icon="restaurant-outline"
          title="Food Compatibility Data"
        >
          <Paragraph theme={theme}>
            Dietary Synergy contains a food compatibility database used to
            provide compatibility results for selected food combinations.
          </Paragraph>

          <Paragraph theme={theme}>
            The compatibility information contained in the application is
            application data and is not personal information about individual
            users.
          </Paragraph>

          <View
            style={[
              styles.databaseCard,
              {
                backgroundColor: theme.surfaceSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <View
              style={[
                styles.databaseIcon,
                {
                  backgroundColor: theme.primaryLight,
                },
              ]}
            >
              <Ionicons name="leaf-outline" size={20} color={theme.primary} />
            </View>

            <View style={styles.databaseContent}>
              <Text
                style={[
                  styles.databaseTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Explore How Foods Work Together
              </Text>

              <Text
                style={[
                  styles.databaseText,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                Results are based on the food-combination information available
                in the application database.
              </Text>
            </View>
          </View>
        </Section>

        {/* 05 How Information Is Used */}
        <Section
          theme={theme}
          number="05"
          icon="settings-outline"
          title="How Information Is Used"
        >
          <Paragraph theme={theme}>
            Information stored by the application may be used to:
          </Paragraph>

          <Bullet theme={theme}>
            Display your recently checked food combinations.
          </Bullet>

          <Bullet theme={theme}>
            Display combinations that you have saved as Favorites.
          </Bullet>

          <Bullet theme={theme}>
            Provide food compatibility results based on the application's
            database.
          </Bullet>
        </Section>

        {/* 06 Information Sharing */}
        <Section
          theme={theme}
          number="06"
          icon="share-social-outline"
          title="Information Sharing"
        >
          <Paragraph theme={theme}>
            Dietary Synergy does not intentionally sell your personal
            information to third parties.
          </Paragraph>

          <Paragraph theme={theme}>
            Information stored locally for History and Favorites remains on your
            device unless a future version of the application introduces
            additional services that require data transmission.
          </Paragraph>
        </Section>

        {/* 07 Third Party Services */}
        <Section
          theme={theme}
          number="07"
          icon="globe-outline"
          title="Third-Party Services"
        >
          <Paragraph theme={theme}>
            The current version of Dietary Synergy does not require users to
            create an account to use the core food compatibility checker.
          </Paragraph>

          <Paragraph theme={theme}>
            If third-party services are added in future versions, this Privacy
            Policy may be updated to explain the information shared with those
            services.
          </Paragraph>
        </Section>

        {/* 08 Children's Privacy */}
        <Section
          theme={theme}
          number="08"
          icon="people-outline"
          title="Children's Privacy"
        >
          <Paragraph theme={theme}>
            Dietary Synergy is not designed to intentionally collect personal
            information from children.
          </Paragraph>

          <Paragraph theme={theme}>
            Users should avoid submitting unnecessary personal information
            through the application.
          </Paragraph>
        </Section>

        {/* 09 Data Deletion */}
        <Section
          theme={theme}
          number="09"
          icon="trash-outline"
          title="Data Deletion"
        >
          <Paragraph theme={theme}>
            Because History and Favorites are stored locally on the device,
            users can remove this information using the available History and
            Favorites controls.
          </Paragraph>

          <Paragraph theme={theme}>
            Uninstalling the application may also remove application data stored
            locally by the app, depending on the device's operating system and
            storage behavior.
          </Paragraph>
        </Section>

        {/* 10 Data Security */}
        <Section
          theme={theme}
          number="10"
          icon="shield-checkmark-outline"
          title="Data Security"
        >
          <Paragraph theme={theme}>
            We take reasonable steps to keep application data appropriately
            protected. However, no electronic storage method can be guaranteed
            to be completely secure.
          </Paragraph>
        </Section>

        {/* 11 Changes */}
        <Section
          theme={theme}
          number="11"
          icon="refresh-outline"
          title="Changes to This Privacy Policy"
        >
          <Paragraph theme={theme}>
            This Privacy Policy may be updated when application functionality,
            data handling practices, or applicable requirements change.
          </Paragraph>

          <Paragraph theme={theme}>
            The updated version will be made available within the application or
            through the application's official privacy policy page.
          </Paragraph>
        </Section>

        {/* 12 Contact */}
        <Section theme={theme} number="12" icon="mail-outline" title="Contact">
          <Paragraph theme={theme}>
            If you have questions about this Privacy Policy or how Dietary
            Synergy handles information, please contact the Dietary Synergy
            support team through the contact information provided in the
            application.
          </Paragraph>
        </Section>

        {/* Important Disclaimer */}
        <View
          style={[
            styles.disclaimer,
            {
              backgroundColor: theme.primaryLight,
              borderColor: theme.border,
            },
          ]}
        >
          <View
            style={[
              styles.disclaimerIcon,
              {
                backgroundColor: theme.surface,
              },
            ]}
          >
            <Ionicons
              name="alert-circle-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.disclaimerContent}>
            <Text
              style={[
                styles.disclaimerTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Important information
            </Text>

            <Text
              style={[
                styles.disclaimerText,
                {
                  color: theme.text,
                },
              ]}
            >
              Dietary Synergy provides informational food compatibility
              guidance. It is not a substitute for professional medical,
              nutritional, or dietary advice.
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
              styles.footerSubtitle,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Explore How Foods Work Together
          </Text>

          <View style={styles.footerDivider}>
            <View
              style={[
                styles.footerLine,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />

            <Ionicons name="leaf-outline" size={15} color={theme.primary} />

            <View
              style={[
                styles.footerLine,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            />
          </View>

          <Text
            style={[
              styles.footerCopyright,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            © {new Date().getFullYear()} Dietary Synergy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/* Section                                                                     */
/* -------------------------------------------------------------------------- */

type SectionProps = {
  theme: AppTheme;
  number: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  children: React.ReactNode;
};

const Section = ({ theme, number, icon, title, children }: SectionProps) => {
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <View style={styles.sectionHeader}>
        <View
          style={[
            styles.sectionIcon,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Ionicons name={icon} size={19} color={theme.primary} />
        </View>

        <View style={styles.sectionHeading}>
          <Text
            style={[
              styles.sectionNumber,
              {
                color: theme.primary,
              },
            ]}
          >
            {number}
          </Text>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </View>

      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/* Paragraph                                                                    */
/* -------------------------------------------------------------------------- */

const Paragraph = ({
  theme,
  children,
}: {
  theme: AppTheme;
  children: React.ReactNode;
}) => {
  return (
    <Text
      style={[
        styles.paragraph,
        {
          color: theme.textSecondary,
        },
      ]}
    >
      {children}
    </Text>
  );
};

/* -------------------------------------------------------------------------- */
/* Bullet                                                                      */
/* -------------------------------------------------------------------------- */

const Bullet = ({
  theme,
  children,
}: {
  theme: AppTheme;
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.bulletRow}>
      <View
        style={[
          styles.bullet,
          {
            backgroundColor: theme.primary,
          },
        ]}
      />

      <Text
        style={[
          styles.bulletText,
          {
            color: theme.textSecondary,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/* Highlight Card                                                              */
/* -------------------------------------------------------------------------- */

type HighlightCardProps = {
  theme: AppTheme;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  description: string;
};

const HighlightCard = ({
  theme,
  icon,
  title,
  description,
}: HighlightCardProps) => {
  return (
    <View
      style={[
        styles.highlightCard,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <View
        style={[
          styles.highlightIcon,
          {
            backgroundColor: theme.primaryLight,
          },
        ]}
      >
        <Ionicons name={icon} size={19} color={theme.primary} />
      </View>

      <Text
        style={[
          styles.highlightTitle,
          {
            color: theme.text,
          },
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.highlightDescription,
          {
            color: theme.textSecondary,
          },
        ]}
      >
        {description}
      </Text>
    </View>
  );
};

export default PrivacyPolicyScreen;
