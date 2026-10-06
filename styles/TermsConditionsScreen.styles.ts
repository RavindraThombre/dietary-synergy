import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // --------------------------------------------------
  // Header
  // --------------------------------------------------

  header: {
    minHeight: 78,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  headerLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
  },

  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    flex: 1,
    minWidth: 0,
    marginLeft: 11,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  subtitle: {
    fontSize: 11.5,
    marginTop: 3,
    lineHeight: 16,
  },

  headerBadge: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  // --------------------------------------------------
  // Content
  // --------------------------------------------------

  content: {
    paddingHorizontal: 18,
    paddingTop: 17,
    paddingBottom: 42,
  },

  // --------------------------------------------------
  // Last Updated
  // --------------------------------------------------

  updatedCard: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  updatedIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  updatedText: {
    flex: 1,
    fontSize: 12,
    marginLeft: 9,
    lineHeight: 17,
  },

  // --------------------------------------------------
  // Sections
  // --------------------------------------------------

  section: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 11,
    lineHeight: 20,
  },

  sectionBody: {
    width: "100%",
  },

  paragraph: {
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 9,
  },

  // --------------------------------------------------
  // Bullet List
  // --------------------------------------------------

  bulletRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 9,
    paddingLeft: 1,
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
    minWidth: 0,
    fontSize: 13,
    lineHeight: 21,
  },

  // --------------------------------------------------
  // Important Notice
  // --------------------------------------------------

  notice: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 3,
  },

  noticeIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },

  noticeText: {
    flex: 1,
    minWidth: 0,
    fontSize: 12.5,
    lineHeight: 19,
    marginLeft: 10,
  },

  // --------------------------------------------------
  // Footer
  // --------------------------------------------------

  footer: {
    textAlign: "center",
    fontSize: 10.5,
    lineHeight: 17,
    marginTop: 22,
  },
});

export default styles;
