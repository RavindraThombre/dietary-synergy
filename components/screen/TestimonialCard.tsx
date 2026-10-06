import { Image, StyleSheet, Text, View } from "react-native";
import type { AppTheme } from "../../constants/theme";

type Props = {
  name: string;
  quote: string;
  image: string;
  theme: AppTheme;
};

export default function TestimonialCard({ name, quote, image, theme }: Props) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={[styles.quote, { color: theme.text }]}>“{quote}”</Text>

        <Text style={[styles.name, { color: theme.primary }]}>{name}</Text>

        <Text style={[styles.caption, { color: theme.textSecondary }]}>
          Wellness community member
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 275,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: 145,
    backgroundColor: "#DCE8D8",
  },
  content: {
    padding: 17,
  },
  quote: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: "500",
  },
  name: {
    fontSize: 14,
    fontWeight: "800",
    marginTop: 14,
  },
  caption: {
    fontSize: 12,
    marginTop: 4,
  },
});
