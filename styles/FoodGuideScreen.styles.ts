import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    width: "100%",
    paddingHorizontal: 18,
    paddingTop: 16,
    marginBottom: 14,
  },

  headerLeft: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
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

  titleContainer: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    fontSize: 23,
    fontWeight: "800",
    letterSpacing: -0.4,
  },

  subtitle: {
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 3,
  },

  // =====================================================
  // INTRO CARD
  // =====================================================

  introCard: {
    width: "auto",
    marginHorizontal: 18,
    marginBottom: 14,
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  introIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  introContent: {
    flex: 1,
    minWidth: 0,
  },

  introTitle: {
    fontSize: 13.5,
    fontWeight: "800",
    lineHeight: 19,
  },

  introText: {
    fontSize: 10.5,
    lineHeight: 16,
    marginTop: 3,
  },

  // =====================================================
  // SEARCH
  // =====================================================

  searchContainer: {
    minHeight: 52,
    marginHorizontal: 18,
    marginBottom: 20,
    paddingHorizontal: 14,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 13.5,
    marginHorizontal: 10,
    paddingVertical: 0,
  },

  // =====================================================
  // LIST HEADER
  // =====================================================

  listHeader: {
    width: "100%",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  sectionTitleContainer: {
    flex: 1,
    minWidth: 0,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 21,
  },

  sectionSubtitle: {
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 2,
  },

  countText: {
    minWidth: 30,
    height: 27,
    paddingHorizontal: 9,
    borderRadius: 9,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 11,
    fontWeight: "800",
    overflow: "hidden",
    marginLeft: 10,
  },

  // =====================================================
  // FOOD LIST
  // =====================================================

  listContent: {
    paddingBottom: 35,
  },

  foodCard: {
    width: "auto",
    minHeight: 72,
    marginHorizontal: 18,
    marginBottom: 10,
    borderRadius: 18,
    borderWidth: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  foodNumber: {
    width: 27,
    height: 27,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  foodNumberText: {
    fontSize: 9.5,
    fontWeight: "800",
  },

  foodIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  foodContent: {
    flex: 1,
    minWidth: 0,
    paddingRight: 7,
  },

  foodName: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },

  foodHint: {
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 3,
  },

  foodArrow: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 3,
  },

  // =====================================================
  // EMPTY STATE
  // =====================================================

  emptyCard: {
    width: "auto",
    marginHorizontal: 18,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 22,
    paddingVertical: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyIcon: {
    width: 68,
    height: 68,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyText: {
    maxWidth: 290,
    fontSize: 12.5,
    lineHeight: 19,
    marginTop: 7,
    textAlign: "center",
  },

  resetButton: {
    minHeight: 38,
    paddingHorizontal: 15,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },

  resetButtonText: {
    fontSize: 11.5,
    fontWeight: "800",
  },

  // =====================================================
  // FOOTER
  // =====================================================

  footerCard: {
    marginHorizontal: 18,
    marginTop: 9,
    padding: 13,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  footerText: {
    flex: 1,
    minWidth: 0,
    fontSize: 10,
    lineHeight: 16,
    marginLeft: 8,
  },

  // =====================================================
  // DETAILS SCREEN
  // =====================================================

  detailsContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 35,
  },

  detailsHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  detailsHeaderTitleContainer: {
    flex: 1,
    minWidth: 0,
  },

  detailsHeaderTitle: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  detailsHeaderSubtitle: {
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 2,
  },

  // =====================================================
  // DETAILS HERO
  // =====================================================

  detailsHero: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 23,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "center",
  },

  detailsIcon: {
    width: 70,
    height: 70,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  detailsFoodName: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.3,
  },

  databaseBadge: {
    minHeight: 31,
    paddingHorizontal: 11,
    borderRadius: 10,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  databaseDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 7,
  },

  databaseBadgeText: {
    fontSize: 10,
    fontWeight: "800",
  },

  detailsDescription: {
    maxWidth: 310,
    fontSize: 12.5,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 10,
  },

  // =====================================================
  // INFORMATION CARD
  // =====================================================

  infoCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 19,
    padding: 15,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "flex-start",
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
    lineHeight: 19,
  },

  infoText: {
    fontSize: 11.5,
    lineHeight: 18,
    marginTop: 5,
  },

  // =====================================================
  // NOTE CARD
  // =====================================================

  noteCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 17,
    padding: 14,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  noteIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  noteText: {
    flex: 1,
    minWidth: 0,
    fontSize: 10.5,
    lineHeight: 17,
    marginLeft: 9,
  },
  foodEmoji: {
    fontSize: 22,
    lineHeight: 26,
  },

  detailsFoodEmoji: {
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },
});
