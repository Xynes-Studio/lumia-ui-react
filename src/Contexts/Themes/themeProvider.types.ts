import {
  Strokes,
  Typography,
  BackgroundType,
  colorTypes,
  spacingTypes,
} from "@shared/types/styles.types";
import { ReactNode } from "react";

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}
export interface Theme {
  background: BackgroundType;
  color: colorTypes;
  spacing: spacingTypes;
  typography: Typography;
  strokes: Strokes;
  shadow: string;
  shadowDeep: string;
  neumorphismShadow: string;
  userDefinedShadowOne?: string;
  userDefinedShadowTwo?: string;
  breakpoint: number;
  pageMargin: number;
}
