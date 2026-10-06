export const lightTheme = {
  mode: "light" as const,
  background: "#F5F8F3",
  surface: "#FFFFFF",
  surfaceSecondary: "#EDF4E9",
  backgroundElement: "#EDF4E9",
  text: "#183D2A",
  textSecondary: "#718074",
  primary: "#347A4B",
  primaryLight: "#DCEEDC",
  border: "#E2E9DF",
  overlay: "rgba(15, 35, 20, 0.45)",
  input: "#F7FAF5",
};

export const darkTheme = {
  mode: "dark" as const,
  background: "#101812",
  surface: "#1A261D",
  surfaceSecondary: "#25372A",
  backgroundElement: "#25372A",
  text: "#EAF4E9",
  textSecondary: "#A1B5A4",
  primary: "#8DD49A",
  primaryLight: "#2B4932",
  border: "#314536",
  overlay: "rgba(0, 0, 0, 0.65)",
  input: "#233127",
};

export const Fonts = {
  mono: "monospace",
};

export const Spacing = {
  one: 4,
  half: 2,
  two: 8,
  three: 12,
  four: 16,
  five: 20,
  six: 24,
};

export const BottomTabInset = 80;

export const Colors = {
  light: {
    background: lightTheme.background,
    backgroundElement: lightTheme.surfaceSecondary,
    text: lightTheme.text,
  },
  dark: {
    background: darkTheme.background,
    backgroundElement: darkTheme.surfaceSecondary,
    text: darkTheme.text,
  },
};

export const MaxContentWidth = 1200;
export type AppTheme = typeof lightTheme | typeof darkTheme;
export type ThemeColor = keyof AppTheme;
