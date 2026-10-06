import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";

import type { AppTheme } from "../../constants/theme";
import styles from "../../styles/TermsConditionsScreen.styles";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

const TermsConditionsScreen = ({ theme, onBack }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
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
          <Ionicons name="arrow-back" size={21} color={theme.text} />
        </Pressable>

        <View style={styles.headerLeft}>
          <Ionicons
            name="document-text-outline"
            size={25}
            color={theme.primary}
          />

          <View style={styles.headerText}>
            <Text style={[styles.title, { color: theme.text }]}>
              Terms & Conditions
            </Text>

            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              Terms for using Dietary Synergy
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.headerBadge,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Ionicons
            name="checkmark-circle-outline"
            size={17}
            color={theme.primary}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Last Updated */}
        <View
          style={[
            styles.updatedCard,
            {
              backgroundColor: theme.surfaceSecondary,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons name="calendar-outline" size={18} color={theme.primary} />

          <Text style={[styles.updatedText, { color: theme.textSecondary }]}>
            Last updated: October 2026
          </Text>
        </View>

        <Section
          theme={theme}
          icon="information-circle-outline"
          title="1. Acceptance of Terms"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            By using Dietary Synergy, you agree to these Terms & Conditions. If
            you do not agree with these terms, please do not use the
            application.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            These terms apply to your use of the Dietary Synergy application and
            its available features.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="restaurant-outline"
          title="2. Use of the Application"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Dietary Synergy is designed to help users explore food compatibility
            information from the application's available database.
          </Text>

          <Bullet theme={theme}>
            Use the application only for lawful purposes.
          </Bullet>

          <Bullet theme={theme}>
            Do not intentionally interfere with the operation of the
            application.
          </Bullet>

          <Bullet theme={theme}>
            Do not attempt to gain unauthorized access to application systems or
            data.
          </Bullet>

          <Bullet theme={theme}>
            Do not use the application in a way that could damage, overload, or
            disrupt the service.
          </Bullet>
        </Section>

        <Section
          theme={theme}
          icon="search-outline"
          title="3. Food Compatibility Information"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Dietary Synergy provides compatibility information based on the food
            combination database included with the application.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Results are provided for informational purposes and should not be
            interpreted as guaranteed outcomes for every individual.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="medical-outline"
          title="4. Health and Dietary Disclaimer"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Dietary Synergy is not a medical, nutritional, or dietary
            professional service.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Information provided by the application should not be used as a
            substitute for professional medical, nutritional, or dietary advice.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            If you have specific health, allergy, dietary, or medical concerns,
            consult an appropriately qualified professional before making
            decisions based on food-related information.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="bookmark-outline"
          title="5. History and Favorites"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Dietary Synergy may provide History and Favorites features.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            These features are intended to help you access combinations that you
            have previously checked or saved.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            As described in the Privacy Policy, the current version stores these
            items locally on your device.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="server-outline"
          title="6. Application Data"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            The food compatibility database and other application content are
            provided as part of Dietary Synergy.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            We may update, modify, expand, or remove application data and
            features in future versions.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="construct-outline"
          title="7. Availability and Changes"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            We may change, suspend, or discontinue parts of Dietary Synergy when
            necessary, including for maintenance, updates, security, or
            improvements.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            We do not guarantee that every feature will always be available or
            operate without interruption.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="shield-outline"
          title="8. Intellectual Property"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            The Dietary Synergy application, including its interface, branding,
            software, and original application content, may be protected by
            applicable intellectual property laws.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            You may use the application for its intended purpose but may not
            copy, modify, distribute, or commercially exploit application
            content without appropriate authorization.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="warning-outline"
          title="9. Limitation of Responsibility"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Dietary Synergy is provided as an informational application. To the
            extent permitted by applicable law, we are not responsible for
            decisions made solely on the basis of information displayed by the
            application.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Users are responsible for considering their individual circumstances
            and obtaining professional advice when appropriate.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="person-outline"
          title="10. User Responsibility"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            You are responsible for how you use the information provided by Food
            Harmony.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            You should independently verify information when making decisions
            that could affect your health, safety, or wellbeing.
          </Text>
        </Section>

        <Section
          theme={theme}
          icon="refresh-outline"
          title="11. Changes to These Terms"
        >
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            These Terms & Conditions may be updated when the application,
            services, or applicable requirements change.
          </Text>

          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            Updated terms may be made available within the application or
            through the official Dietary Synergy website.
          </Text>
        </Section>

        <Section theme={theme} icon="mail-outline" title="12. Contact">
          <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
            If you have questions about these Terms & Conditions, please contact
            the Dietary Synergy support team using the contact information
            provided in the application.
          </Text>
        </Section>

        {/* Important Notice */}
        <View
          style={[
            styles.notice,
            {
              backgroundColor: theme.primaryLight,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons
            name="alert-circle-outline"
            size={21}
            color={theme.primary}
          />

          <Text style={[styles.noticeText, { color: theme.text }]}>
            Dietary Synergy provides informational food compatibility guidance.
            It does not provide medical, nutritional, or dietary treatment.
          </Text>
        </View>

        <Text style={[styles.footer, { color: theme.textSecondary }]}>
          © {new Date().getFullYear()} Dietary Synergy
        </Text>
      </ScrollView>
    </View>
  );
};

type SectionProps = {
  theme: AppTheme;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  children: React.ReactNode;
};

const Section = ({ theme, icon, title, children }: SectionProps) => {
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

        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          {title}
        </Text>
      </View>

      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
};

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

      <Text style={[styles.bulletText, { color: theme.textSecondary }]}>
        {children}
      </Text>
    </View>
  );
};

export default TermsConditionsScreen;
