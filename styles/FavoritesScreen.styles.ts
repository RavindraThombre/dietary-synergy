import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 40,
  },

  /* -------------------------------------------------------------------------- */
  /* Header                                                                     */
  /* -------------------------------------------------------------------------- */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginRight: 10,
  },

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
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
    marginTop: 3,
    lineHeight: 16,
  },

  clearButton: {
    minHeight: 36,
    paddingHorizontal: 11,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },

  clearButtonText: {
    fontSize: 12,
    fontWeight: "800",
  },

  /* -------------------------------------------------------------------------- */
  /* Summary                                                                    */
  /* -------------------------------------------------------------------------- */

  summaryCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  summaryIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  summaryContent: {
    flex: 1,
    minWidth: 0,
  },

  summaryTitle: {
    fontSize: 14.5,
    fontWeight: "800",
  },

  summaryText: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 3,
  },

  /* -------------------------------------------------------------------------- */
  /* Section                                                                    */
  /* -------------------------------------------------------------------------- */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
  },

  sectionCount: {
    minWidth: 28,
    height: 26,
    paddingHorizontal: 8,
    borderRadius: 9,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 11,
    fontWeight: "800",
  },

  /* -------------------------------------------------------------------------- */
  /* Favorite Card                                                              */
  /* -------------------------------------------------------------------------- */

  favoriteCard: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 19,
    padding: 14,
    marginBottom: 11,
  },

  favoriteTopRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  foodIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  foodContent: {
    flex: 1,
    minWidth: 0,
    paddingRight: 7,
  },

  foodsText: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },

  combinationText: {
    fontSize: 10.5,
    marginTop: 4,
  },

  starButton: {
    width: 36,
    height: 36,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },

  divider: {
    width: "100%",
    height: 1,
    marginVertical: 12,
  },

  favoriteBottomRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statusContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
  },

  statusIcon: {
    width: 28,
    height: 28,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "800",
  },

  savedText: {
    fontSize: 10,
    marginLeft: 8,
  },

  /* -------------------------------------------------------------------------- */
  /* Empty State                                                                */
  /* -------------------------------------------------------------------------- */

  emptyCard: {
    width: "100%",
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
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyText: {
    fontSize: 12.5,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 7,
    maxWidth: 290,
  },

  /* -------------------------------------------------------------------------- */
  /* Footer                                                                     */
  /* -------------------------------------------------------------------------- */

  footer: {
    textAlign: "center",
    fontSize: 10.5,
    marginTop: 22,
    lineHeight: 17,
  },
});
