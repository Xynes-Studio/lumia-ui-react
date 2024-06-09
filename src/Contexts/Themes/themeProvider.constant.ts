import {
  background,
  color,
  spacing,
  typography,
  strokes,
  shadow,
  shadowDeep,
  neumorphismShadow,
  breakpoint,
  pageMargin,
} from "@shared/styles";
import { Theme } from "./themeProvider.types";
import { darkThemeDefault } from "@shared/dark.styles";

export const defaultTheme: Theme = {
  background,
  color,
  spacing,
  typography,
  strokes,
  shadow,
  shadowDeep,
  neumorphismShadow,
  breakpoint,
  pageMargin,
};

export const darkTheme: Theme = {
  ...darkThemeDefault,
  ...defaultTheme,
};
