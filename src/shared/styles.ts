import { css } from "@emotion/react";
import { BackgroundType, colorTypes, spacingTypes, Strokes, Typography } from "./types/styles.types";

// Global style variables

export const background: BackgroundType = {
  app: "#F6F9FC",
  appInverse: "#333333",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color: colorTypes = {
  primary: "#00FFB2",
  secondary: "#533CDE",
  tertiary: "#FF9393",
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
  border: "rgba(0,0,0,0.1)",
  border100: "#2D3230",
  input100: "#E9E9E9",
  accent100: "#00FFB2",
  accent200: "#533CDE",
  accent300: "#FF9393",
  error: "#F52E2E",
  warning: "#FF9E44",
  positive: "#17AF81",
};

export const spacing: spacingTypes = {
  padding: {
    p0: "0.375rem", // 6px, minimal padding for very tight spaces
    p1: "0.5rem", // 8px, small padding for close elements
    p2: "0.75rem", // 12px, standard padding, ideal for grouped items
    p3: "1rem", // 16px, medium padding, commonly used in containers
    p4: "1.25rem", // 20px, moderate padding, good for larger sections
    p5: "1.5rem", // 24px, spacious padding, used in major sections or large containers
  },
  borderRadius: {
    r0: "0.25rem", // 4px
    r1: "0.5rem", // 8px
    r2: "0.75rem", // 12px
    r3: "1rem", // 16px
    r4: "1.5rem", // 24px
    r5: "2rem", // 32px
  },
};

export const typography: Typography = {
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
    h1: "2.25rem", // 36px
    h2: "2rem", // 32px
    h3: "1.75rem", // 28px
    h4: "1.5rem", // 24px
    h5: "1.25rem", // 20px
    h6: "1rem", // 16px
    text: "1rem", // 16px, ideal for body text
    input: "0.875rem", // 14px, typical for form input text
    caption: "0.75rem", // 12px, for smaller text
    code: "0.875rem", // 14px, suitable for code snippets
  },
};

export const strokes: Strokes = {
  s0: "0.1rem", // 1.6px, very fine details and subtle divisions
  s1: "0.2rem", // 3.2px, fine lines for subtle differentiation
  s2: "0.4rem", // 6.4px, medium weight strokes for more visible separation
  s3: "0.8rem", // 12.8px, thick strokes for bold statements or accent features
};

export const shadow: string = "0 2px 4px rgba(0, 0, 0, 0.1)";
export const shadowDeep: string = "0 10px 20px rgba(0, 0, 0, 0.1)";
export const neumorphismShadow: string =
  "inset 5px 5px 15px rgba(0, 0, 0, 0.25), inset -5px -5px 15px rgba(200, 200, 200, 0.5)";

export const breakpoint:number = 600;
export const pageMargin: number = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.p3};
  @media (min-width: ${breakpoint}px) {
    margin: 0 ${pageMargin}%;
  }
`;

export const GlobalStyle = css`
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.text}; /* Example font size */
    color: ${color.foreground};
    background: ${background.app};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
