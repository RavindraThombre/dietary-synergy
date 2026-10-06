import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 42,
  },

  /* ------------------------------------------------------------------------ */
  /* Header                                                                  */
  /* ------------------------------------------------------------------------ */

  header: {
    marginBottom: 12,
  },

  backButton: {
    alignSelf: "flex-start",
    minHeight: 42,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  backText: {
    fontSize: 13,
    fontWeight: "700",
  },

  /* ------------------------------------------------------------------------ */
  /* Hero                                                                    */
  /* ------------------------------------------------------------------------ */

  hero: {
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: "center",
  },

  heroLogoContainer: {
    width: 76,
    height: 76,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  heroLeaf: {
    fontSize: 34,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  description: {
    marginTop: 12,
    fontSize: 12.5,
    lineHeight: 19,
    textAlign: "center",
    maxWidth: 340,
  },

  /* ------------------------------------------------------------------------ */
  /* Sections                                                                */
  /* ------------------------------------------------------------------------ */

  section: {
    marginTop: 25,
  },

  sectionEyebrow: {
    fontSize: 9.5,
    fontWeight: "800",
    letterSpacing: 1.25,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.25,
    marginBottom: 12,
  },

  /* ------------------------------------------------------------------------ */
  /* Contact Cards                                                           */
  /* ------------------------------------------------------------------------ */

  contactCard: {
    width: "100%",
    minHeight: 78,
    borderWidth: 1,
    borderRadius: 18,
    padding: 13,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  contactIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  contactContent: {
    flex: 1,
    minWidth: 0,
  },

  contactTitle: {
    fontSize: 10.5,
    fontWeight: "700",
    marginBottom: 2,
  },

  contactValue: {
    fontSize: 13.5,
    fontWeight: "800",
    marginBottom: 2,
  },

  contactDescription: {
    fontSize: 10.5,
    lineHeight: 15,
  },

  chevronContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  /* ------------------------------------------------------------------------ */
  /* Location                                                                */
  /* ------------------------------------------------------------------------ */

  locationCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 21,
    padding: 13,
    overflow: "hidden",
  },

  mapPreview: {
    height: 175,
    width: "100%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },

  mapDecorCircle: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    opacity: 0.5,
  },

  mapPin: {
    width: 53,
    height: 53,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  mapTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  mapSubtitle: {
    marginTop: 4,
    fontSize: 10.5,
    textAlign: "center",
  },

  locationContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  locationTextContainer: {
    flex: 1,
    minWidth: 0,
  },

  locationTitle: {
    fontSize: 13.5,
    fontWeight: "800",
  },

  locationAddress: {
    fontSize: 11.5,
    marginTop: 3,
  },

  mapButton: {
    width: "100%",
    minHeight: 46,
    borderRadius: 13,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  mapButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  /* ------------------------------------------------------------------------ */
  /* Help Box                                                                */
  /* ------------------------------------------------------------------------ */

  helpBox: {
    width: "100%",
    marginTop: 23,
    borderWidth: 1,
    borderRadius: 19,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  helpIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  helpContent: {
    flex: 1,
    minWidth: 0,
    marginLeft: 11,
  },

  helpTitle: {
    fontSize: 13.5,
    fontWeight: "800",
    marginBottom: 4,
  },

  helpText: {
    fontSize: 11.5,
    lineHeight: 18,
  },

  /* ------------------------------------------------------------------------ */
  /* Footer                                                                  */
  /* ------------------------------------------------------------------------ */

  footer: {
    alignItems: "center",
    marginTop: 32,
  },

  footerLine: {
    width: "100%",
    height: 1,
    marginBottom: 20,
  },

  footerLogo: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  footerLeaf: {
    fontSize: 23,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  footerSubtitle: {
    fontSize: 10.5,
    marginTop: 3,
    textAlign: "center",
  },

  footerCopyright: {
    fontSize: 9.5,
    marginTop: 10,
  },
});

export default styles;
