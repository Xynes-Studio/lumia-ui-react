import { css } from "@emotion/react";
import { backgroundType, colorTypes, spacingTypes } from "./types/styles.types";

// Global style variables

export const background: backgroundType = {
  app: "#F6F9FC",
  appInverse: "#333333",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color: colorTypes = {
  // Palette
  primary: "#00FFB2",
  secondary: "#533CDE",
  tertiary: "#FF9393",

  // Monochrome
  foreground: "#333333",
  foreground200: "#444444",
  foreground300: "#666666",
  foregroundInverse: "#FFFFFF",
  foregroundInverse200: "#F8F8F8",
  foregroundInverse300: "#F3F3F3",
  foregroundInverse400: "#E3E3E3",

  medium: "#DDDDDD",
  medium100: "#EEEEEE",
  medium200: "#999999",

  border: "rgba(0,0,0,.1)",
  border1: "#2D3230",

  //Input
  input100: "#E9E9E9",
  //brand
  accent100: "#00FFB2",
  accent200: "#533CDE",
  accent300: "#FF9393",

  //status
  error: "#F52E2E",
  warning: "#FF9E44",
  positive: "#17AF81",
};

export const spacing: spacingTypes = {
  padding: {
    p0: "1.5vh",
    p1: "2.4vh",
    p2: "3.84vh",
    p3: "6.1vh",
    p4: "9.76v",
    p5: "15.6v",
  },
  borderRadius: {
    r0: "1.5vh",
    r1: "2.4vh",
    r2: "3.84vh",
    r3: "6.1vh",
    r4: "9.76v",
    r5: "15.6v",
  },
};

export const typography = {
  type: {
    primary: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    title: '"DM Serif Display", serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    medium: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    h1: '6vh',
    h2: '5vh',
    h3: '4.5vh',
    h4: '4vh',
    h5: '3.5vh',
    h6: '3vh',
    text: '2.5vh',
    input: '2.25vh',
    caption: '2vh',
    code: "1.8vh",
  },
};

export const breakpoint = 600;
export const strokes = {
  s0: "0.2vh",
  s1: "0.5vh",
  s2: "1vh",
  s3: "2vh",
};

export const shadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
export const neumorphismShadow =
  "inset 5px 5px 15px rgba(0, 0, 0, 0.25), inset -5px -5px 15px rgba(200, 200, 200, 0.5)";

export const pageMargin: number = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.p3}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
