import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";

import type { AppTheme } from "../../constants/theme";
import styles from "../../styles/ContactScreen.styles";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

export default function ContactScreen({ theme, onBack }: Props) {
  const openEmail = () => {
    Linking.openURL("mailto:ravindrathombre66@gmail.com");
  };

  const openPhone = () => {
    Linking.openURL("tel:+919359164626");
  };

  const openMaps = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/?api=1&query=Magarpatta%20Pune",
    );
  };

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
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
                opacity: pressed ? 0.65 : 1,
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
          <View
            style={[
              styles.heroLogoContainer,
              {
                backgroundColor: theme.surfaceSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.heroLeaf}>🌿</Text>
          </View>

          <Text
            style={[
              styles.eyebrow,
              {
                color: theme.primary,
              },
            ]}
          >
            DIETARY SYNERGY
          </Text>

          <Text
            style={[
              styles.title,
              {
                color: theme.text,
              },
            ]}
          >
            Contact Us
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            We're here to help
          </Text>

          <Text
            style={[
              styles.description,
              {
                color: theme.textSecondary,
              },
            ]}
          >
            Have a question, suggestion, or feedback about Dietary Synergy? We'd
            love to hear from you.
          </Text>
        </View>

        {/* Contact Options */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionEyebrow,
              {
                color: theme.primary,
              },
            ]}
          >
            GET IN TOUCH
          </Text>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            We'd love to hear from you
          </Text>

          <ContactCard
            theme={theme}
            icon="mail-outline"
            title="Email"
            value="ravindrathombre66@gmail.com"
            description="Send us your questions or suggestions"
            onPress={openEmail}
          />

          <ContactCard
            theme={theme}
            icon="call-outline"
            title="Phone"
            value="+91 93591 64626"
            description="Speak with our support team"
            onPress={openPhone}
          />

          <ContactCard
            theme={theme}
            icon="time-outline"
            title="Support Hours"
            value="Monday – Friday"
            description="9:00 AM – 6:00 PM"
          />
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionEyebrow,
              {
                color: theme.primary,
              },
            ]}
          >
            FIND US
          </Text>

          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Our Location
          </Text>

          <View
            style={[
              styles.locationCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            {/* Map Preview */}
            <View
              style={[
                styles.mapPreview,
                {
                  backgroundColor: theme.surfaceSecondary,
                },
              ]}
            >
              <View
                style={[
                  styles.mapDecorCircle,
                  {
                    backgroundColor: theme.primaryLight,
                  },
                ]}
              />

              <View
                style={[
                  styles.mapPin,
                  {
                    backgroundColor: theme.primary,
                  },
                ]}
              >
                <Ionicons name="location" size={23} color="#FFFFFF" />
              </View>

              <Text
                style={[
                  styles.mapTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Dietary Synergy
              </Text>

              <Text
                style={[
                  styles.mapSubtitle,
                  {
                    color: theme.textSecondary,
                  },
                ]}
              >
                Explore How Foods Work Together
              </Text>
            </View>

            {/* Location Details */}
            <View style={styles.locationContent}>
              <View
                style={[
                  styles.locationIcon,
                  {
                    backgroundColor: theme.primaryLight,
                  },
                ]}
              >
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={theme.primary}
                />
              </View>

              <View style={styles.locationTextContainer}>
                <Text
                  style={[
                    styles.locationTitle,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Dietary Synergy
                </Text>

                <Text
                  style={[
                    styles.locationAddress,
                    {
                      color: theme.textSecondary,
                    },
                  ]}
                >
                  India
                </Text>
              </View>
            </View>

            <Pressable
              onPress={openMaps}
              style={({ pressed }) => [
                styles.mapButton,
                {
                  backgroundColor: theme.primary,
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Ionicons name="navigate-outline" size={18} color="#FFFFFF" />

              <Text style={styles.mapButtonText}>Open in Maps</Text>
            </Pressable>
          </View>
        </View>

        {/* Help */}
        <View
          style={[
            styles.helpBox,
            {
              backgroundColor: theme.primaryLight,
              borderColor: theme.border,
            },
          ]}
        >
          <View
            style={[
              styles.helpIcon,
              {
                backgroundColor: theme.surface,
              },
            ]}
          >
            <Ionicons
              name="help-circle-outline"
              size={22}
              color={theme.primary}
            />
          </View>

          <View style={styles.helpContent}>
            <Text
              style={[
                styles.helpTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Need help?
            </Text>

            <Text
              style={[
                styles.helpText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              If you found an issue with a food combination or have feedback
              about the app, please let us know. Your feedback helps us improve
              Dietary Synergy.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View
            style={[
              styles.footerLine,
              {
                backgroundColor: theme.border,
              },
            ]}
          />

          <View
            style={[
              styles.footerLogo,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Text style={styles.footerLeaf}>🌿</Text>
          </View>

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
}

/* -------------------------------------------------------------------------- */
/* Contact Card                                                               */
/* -------------------------------------------------------------------------- */

type ContactCardProps = {
  theme: AppTheme;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  value: string;
  description: string;
  onPress?: () => void;
};

function ContactCard({
  theme,
  icon,
  title,
  value,
  description,
  onPress,
}: ContactCardProps) {
  const content = (
    <>
      <View
        style={[
          styles.contactIcon,
          {
            backgroundColor: theme.primaryLight,
          },
        ]}
      >
        <Ionicons name={icon} size={21} color={theme.primary} />
      </View>

      <View style={styles.contactContent}>
        <Text
          style={[
            styles.contactTitle,
            {
              color: theme.textSecondary,
            },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.contactValue,
            {
              color: theme.text,
            },
          ]}
          numberOfLines={2}
        >
          {value}
        </Text>

        <Text
          style={[
            styles.contactDescription,
            {
              color: theme.textSecondary,
            },
          ]}
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>

      {onPress && (
        <View
          style={[
            styles.chevronContainer,
            {
              backgroundColor: theme.surfaceSecondary,
            },
          ]}
        >
          <Ionicons
            name="chevron-forward"
            size={17}
            color={theme.textSecondary}
          />
        </View>
      )}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.contactCard,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            opacity: pressed ? 0.72 : 1,
          },
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      style={[
        styles.contactCard,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      {content}
    </View>
  );
}
