import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // =========================================================
  // Screen
  // =========================================================
  screen: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 28,
  },

  // =========================================================
  // Header
  // =========================================================
  header: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  brand: {
    flex: 1,
    marginLeft: 10,
  },

  brandName: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "800",
  },

  brandSubtitle: {
    fontSize: 8.5,
    lineHeight: 12,
    letterSpacing: 1.05,
    marginTop: 2,
    fontWeight: "700",
  },

  // =========================================================
  // Hero
  // =========================================================
  hero: {
    height: 350,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 25,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#426B48",
  },

  heroImageContainer: {
    ...StyleSheet.absoluteFill,
  },

  heroImageBackground: {
    flex: 1,
  },

  heroImage: {
    borderRadius: 25,
  },

  heroOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(8, 31, 15, 0.58)",
  },

  heroContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 22,
    paddingBottom: 25,
  },

  heroTag: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.14)",
    marginBottom: 13,
  },

  heroTagText: {
    color: "#E4F4DF",
    fontSize: 9,
    letterSpacing: 1.25,
    fontWeight: "800",
    marginLeft: 6,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
  },

  heroDescription: {
    color: "#F1F5EF",
    fontSize: 13.5,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 18,
    maxWidth: "92%",
  },

  heroButton: {
    alignSelf: "flex-start",
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },

  heroButtonText: {
    color: "#245A35",
    fontWeight: "800",
    fontSize: 13.5,
    marginHorizontal: 8,
  },

  heroIndicators: {
    position: "absolute",
    top: 17,
    right: 17,
    flexDirection: "row",
    alignItems: "center",
  },

  heroIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 5,
    backgroundColor: "rgba(255,255,255,0.45)",
  },

  heroIndicatorActive: {
    width: 18,
    backgroundColor: "#FFFFFF",
  },

  // =========================================================
  // Shared Sections
  // =========================================================
  introSection: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 15,
  },

  sectionLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionLabelDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },

  sectionEyebrow: {
    fontSize: 9.5,
    lineHeight: 13,
    fontWeight: "800",
    letterSpacing: 1.25,
  },

  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
  },

  sectionDescription: {
    fontSize: 13.5,
    lineHeight: 21,
    marginTop: 7,
  },

  // =========================================================
  // Food Checker
  // =========================================================
  checkerCard: {
    marginHorizontal: 16,
    minHeight: 82,
    padding: 14,
    borderRadius: 19,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  checkerIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  checkerContent: {
    flex: 1,
    marginLeft: 13,
  },

  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkerTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "800",
  },

  newBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    marginLeft: 7,
  },

  newBadgeText: {
    fontSize: 7.5,
    fontWeight: "900",
    letterSpacing: 0.7,
  },

  checkerDescription: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  cardArrow: {
    width: 36,
    height: 36,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  // =========================================================
  // Feature Highlights
  // =========================================================
  featuresSection: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },

  featureList: {
    marginTop: 14,
  },

  featureCard: {
    minHeight: 72,
    borderWidth: 1,
    borderRadius: 17,
    paddingHorizontal: 13,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  featureContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  featureTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "800",
  },

  featureDescription: {
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 2,
  },

  // =========================================================
  // Testimonials / Community
  // =========================================================
  testimonialHeader: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 14,
  },

  testimonialList: {
    paddingHorizontal: 16,
    paddingBottom: 5,
  },

  // =========================================================
  // Footer
  // =========================================================
  footer: {
    alignItems: "center",
    paddingTop: 28,
    paddingBottom: 10,
  },

  footerText: {
    fontSize: 10.5,
    marginTop: 5,
  },
});

export default styles;
