import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 18,
    paddingBottom: 28,
  },

  // ---------------------------------------------------------
  // Result Header
  // ---------------------------------------------------------

  titleSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  resultIcon: {
    width: 72,
    height: 72,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  titleContent: {
    width: "100%",
    alignItems: "center",
  },

  subtitle: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 5,
    textAlign: "center",
  },

  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },

  // ---------------------------------------------------------
  // Selected Foods
  // ---------------------------------------------------------

  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },

  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  cardHeaderContent: {
    flex: 1,
    minWidth: 0,
  },

  cardTitle: {
    fontSize: 15.5,
    fontWeight: "800",
  },

  cardSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 3,
  },

  foodsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    marginBottom: 6,
  },

  foodChip: {
    maxWidth: "100%",
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 11,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  foodEmoji: {
    fontSize: 16,
    marginRight: 6,
  },

  foodText: {
    fontSize: 12.5,
    fontWeight: "700",
    maxWidth: 170,
  },

  plus: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 6,
  },

  // ---------------------------------------------------------
  // Compatibility Status
  // ---------------------------------------------------------

  statusCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  statusIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  statusContent: {
    flex: 1,
    minWidth: 0,
  },

  statusLabel: {
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 0.2,
  },

  statusDescription: {
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 4,
  },

  statusArrow: {
    marginLeft: 8,
  },

  // ---------------------------------------------------------
  // Information Cards
  // ---------------------------------------------------------

  infoCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  infoContent: {
    flex: 1,
    minWidth: 0,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 5,
  },

  infoText: {
    fontSize: 12.5,
    lineHeight: 19,
  },

  // ---------------------------------------------------------
  // Not Found
  // ---------------------------------------------------------

  notFoundCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  notFoundIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  notFoundContent: {
    flex: 1,
    minWidth: 0,
  },

  notFoundTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 5,
  },

  notFoundText: {
    fontSize: 12.5,
    lineHeight: 19,
  },

  // ---------------------------------------------------------
  // Disclaimer
  // ---------------------------------------------------------

  disclaimer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 17,
    padding: 13,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  disclaimerIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  disclaimerText: {
    flex: 1,
    minWidth: 0,
    fontSize: 10.5,
    lineHeight: 17,
  },

  // ---------------------------------------------------------
  // Footer
  // ---------------------------------------------------------

  footer: {
    textAlign: "center",
    fontSize: 10.5,
    lineHeight: 17,
    marginTop: 18,
  },
});
