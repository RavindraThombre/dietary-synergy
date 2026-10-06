import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // =====================================================
  // SAFE AREA
  // =====================================================

  safeArea: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 40,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginRight: 10,
  },

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  headerText: {
    flex: 1,
    minWidth: 0,
  },

  appName: {
    fontSize: 23,
    fontWeight: "800",
    letterSpacing: -0.4,
  },

  tagline: {
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 3,
  },

  // =====================================================
  // HERO
  // =====================================================

  hero: {
    width: "100%",
    marginBottom: 18,
  },

  heroBadge: {
    alignSelf: "flex-start",
    minHeight: 27,
    paddingHorizontal: 10,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  heroBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },

  heroBadgeText: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  heroTitle: {
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
    letterSpacing: -0.7,
  },

  heroDescription: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    maxWidth: 340,
  },

  // =====================================================
  // MAIN CARD
  // =====================================================

  card: {
    width: "100%",
    borderRadius: 23,
    padding: 16,
    borderWidth: 1,
  },

  cardHeader: {
    width: "100%",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.2,
  },

  cardSubtitle: {
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 5,
  },

  // =====================================================
  // FOOD COUNT
  // =====================================================

  countSection: {
    width: "100%",
    alignItems: "center",
  },

  countIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  countTitle: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  countDescription: {
    maxWidth: 280,
    fontSize: 11.5,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
  },

  countOptions: {
    width: "100%",
  },

  countButton: {
    width: "100%",
    minHeight: 70,
    borderRadius: 17,
    borderWidth: 1,
    paddingHorizontal: 11,
    marginBottom: 9,
    flexDirection: "row",
    alignItems: "center",
  },

  countButtonIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  countButtonNumber: {
    fontSize: 18,
    fontWeight: "900",
  },

  countButtonContent: {
    flex: 1,
    minWidth: 0,
  },

  countButtonTitle: {
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 19,
  },

  countButtonDescription: {
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 2,
  },

  // =====================================================
  // SELECTED COUNT
  // =====================================================

  selectedCountCard: {
    width: "100%",
    minHeight: 66,
    borderWidth: 1,
    borderRadius: 17,
    paddingHorizontal: 11,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  selectedCountIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  selectedCountContent: {
    flex: 1,
    minWidth: 0,
  },

  selectedCountTitle: {
    fontSize: 14,
    fontWeight: "800",
  },

  selectedCountText: {
    fontSize: 10.5,
    lineHeight: 16,
    marginTop: 3,
  },

  // =====================================================
  // PROGRESS
  // =====================================================

  progressSection: {
    width: "100%",
    marginBottom: 20,
  },

  progressHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  progressLabel: {
    fontSize: 10.5,
    fontWeight: "600",
  },

  progressValue: {
    fontSize: 10.5,
    fontWeight: "800",
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 3,
  },

  // =====================================================
  // FOOD FIELDS
  // =====================================================

  foodFields: {
    width: "100%",
  },

  fieldContainer: {
    width: "100%",
    marginBottom: 15,
  },

  fieldHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  fieldNumber: {
    width: 25,
    height: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  fieldNumberText: {
    fontSize: 10,
    fontWeight: "900",
  },

  fieldLabel: {
    fontSize: 13,
    fontWeight: "800",
  },

  selector: {
    width: "100%",
    minHeight: 60,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectorContent: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
  },

  selectorIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  selectorEmoji: {
    fontSize: 21,
  },

  selectorTextContainer: {
    flex: 1,
    minWidth: 0,
  },

  selectorText: {
    fontSize: 13.5,
    lineHeight: 19,
  },

  selectorHint: {
    fontSize: 9.5,
    marginTop: 2,
  },

  // =====================================================
  // PRIMARY BUTTON
  // =====================================================

  checkButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButton: {
    width: "100%",
    minHeight: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 8,
  },

  clearButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    marginTop: 2,
  },

  clearText: {
    fontSize: 12,
    fontWeight: "700",
  },

  // =====================================================
  // FOOTER
  // =====================================================

  footer: {
    width: "100%",
    textAlign: "center",
    fontSize: 10.5,
    lineHeight: 17,
    marginTop: 22,
  },

  // =====================================================
  // MODAL
  // =====================================================

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContent: {
    width: "100%",
    height: "82%",
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    paddingHorizontal: 18,
    paddingTop: 17,
    paddingBottom: 15,
    overflow: "hidden",
  },

  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  modalTitleContainer: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
  },

  modalIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  modalTitleContent: {
    flex: 1,
    minWidth: 0,
  },

  modalTitle: {
    fontSize: 19,
    fontWeight: "800",
  },

  modalSubtitle: {
    fontSize: 10.5,
    marginTop: 2,
  },

  modalCloseButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  // =====================================================
  // SEARCH
  // =====================================================

  searchContainer: {
    width: "100%",
    minHeight: 52,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    height: 50,
    fontSize: 14,
    marginHorizontal: 9,
    paddingVertical: 0,
  },

  // =====================================================
  // MODAL RESULT HEADER
  // =====================================================

  modalResultHeader: {
    width: "100%",
    paddingVertical: 9,
  },

  modalResultText: {
    fontSize: 10,
    fontWeight: "600",
  },

  // =====================================================
  // FOOD OPTIONS
  // =====================================================

  foodOption: {
    width: "100%",
    minHeight: 64,
    borderBottomWidth: 1,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  foodOptionContent: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },

  foodOptionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  foodOptionEmoji: {
    fontSize: 21,
  },

  foodOptionTextContainer: {
    flex: 1,
    minWidth: 0,
  },

  foodOptionText: {
    fontSize: 13.5,
    lineHeight: 19,
  },

  alreadySelectedText: {
    fontSize: 9.5,
    marginTop: 2,
  },

  selectedCheck: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  // =====================================================
  // MODAL EMPTY STATE
  // =====================================================

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 55,
  },

  emptyIcon: {
    width: 62,
    height: 62,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyText: {
    maxWidth: 270,
    textAlign: "center",
    fontSize: 11.5,
    lineHeight: 18,
    marginTop: 6,
  },
});
