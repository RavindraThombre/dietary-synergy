import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* ------------------------------------------------------------------------ */
  /* Header                                                                   */
  /* ------------------------------------------------------------------------ */

  header: {
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  headerBrand: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  headerLogoContainer: {
    width: 43,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginRight: 10,
  },

  headerLogo: {
    width: "100%",
    height: "100%",
  },

  headerText: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  headerSubtitle: {
    fontSize: 11,
    marginTop: 2,
  },

  headerPrivacyBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  /* ------------------------------------------------------------------------ */
  /* Content                                                                  */
  /* ------------------------------------------------------------------------ */

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 45,
  },

  /* ------------------------------------------------------------------------ */
  /* Hero                                                                     */
  /* ------------------------------------------------------------------------ */

  hero: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
  },

  heroLogoContainer: {
    width: 105,
    height: 105,
    borderRadius: 23,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  heroLogo: {
    width: "100%",
    height: "100%",
  },

  heroTitle: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.4,
  },

  heroDescription: {
    marginTop: 9,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },

  updatedBadge: {
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  updatedBadgeText: {
    fontSize: 10,
    fontWeight: "700",
  },

  /* ------------------------------------------------------------------------ */
  /* Privacy Highlights                                                       */
  /* ------------------------------------------------------------------------ */

  highlightsSection: {
    marginTop: 27,
  },

  sectionEyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  highlightGrid: {
    marginTop: 13,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },

  highlightCard: {
    width: "48%",
    minHeight: 145,
    borderWidth: 1,
    borderRadius: 17,
    padding: 13,
    marginBottom: 10,
  },

  highlightIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  highlightTitle: {
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 4,
  },

  highlightDescription: {
    fontSize: 10.5,
    lineHeight: 16,
  },

  /* ------------------------------------------------------------------------ */
  /* Privacy Sections                                                         */
  /* ------------------------------------------------------------------------ */

  section: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  sectionHeading: {
    flex: 1,
  },

  sectionNumber: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 2,
  },

  sectionBody: {
    marginTop: 13,
  },

  paragraph: {
    fontSize: 12.5,
    lineHeight: 20,
    marginBottom: 11,
  },

  /* ------------------------------------------------------------------------ */
  /* Bullet                                                                   */
  /* ------------------------------------------------------------------------ */

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingLeft: 2,
  },

  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
    marginRight: 10,
  },

  bulletText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 20,
  },

  /* ------------------------------------------------------------------------ */
  /* Food Database Card                                                       */
  /* ------------------------------------------------------------------------ */

  databaseCard: {
    marginTop: 3,
    borderWidth: 1,
    borderRadius: 15,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  databaseIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  databaseContent: {
    flex: 1,
  },

  databaseTitle: {
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 3,
  },

  databaseText: {
    fontSize: 10.5,
    lineHeight: 16,
  },

  /* ------------------------------------------------------------------------ */
  /* Disclaimer                                                               */
  /* ------------------------------------------------------------------------ */

  disclaimer: {
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 19,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  disclaimerIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  disclaimerContent: {
    flex: 1,
  },

  disclaimerTitle: {
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 4,
  },

  disclaimerText: {
    fontSize: 11.5,
    lineHeight: 18,
  },

  /* ------------------------------------------------------------------------ */
  /* Footer                                                                   */
  /* ------------------------------------------------------------------------ */

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerLogo: {
    width: 75,
    height: 75,
    marginBottom: 8,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  footerSubtitle: {
    marginTop: 4,
    fontSize: 10.5,
  },

  footerDivider: {
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  footerLine: {
    width: 38,
    height: 1,
  },

  footerCopyright: {
    marginTop: 10,
    fontSize: 9.5,
  },
});

export default styles;
