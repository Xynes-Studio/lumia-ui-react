// Define types for backgrounds and colors
export type BackgroundType = {
  app: string;
  appInverse: string;
  positive: string;
  negative: string;
  warning: string;
};

export type colorTypes = {
  primary: string;
  secondary: string;
  tertiary: string;
  foreground: string;
  foreground200: string;
  foreground300: string;
  foregroundInverse: string;
  foregroundInverse200: string;
  foregroundInverse300: string;
  foregroundInverse400: string;
  medium: string;
  medium100: string;
  medium200: string;
  border: string;
  border100: string;
  input100: string;
  accent100: string;
  accent200: string;
  accent300: string;
  error: string;
  warning: string;
  positive: string;
};

export type spacingTypes = {
  padding: {
    [key: string]: string;
  };
  borderRadius: {
    [key: string]: string;
  };
};

export type Types = {
  primary: string;
  title: string;
  code: string;
};

export type Weights = {
  regular: string;
  medium: string;
  bold: string;
  extrabold: string;
  black: string;
};

export type Sizes = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  text: string;
  input: string;
  caption: string;
  code: string;
};


export type Typography = {
  type: Types,
  weight: Weights,
  size: Sizes,
}
export type Strokes = {
  s0: string,
  s1: string,
  s2: string,
  s3: string,
  s4?: string,
  s5?: string,
  s6?: string,
  s7?: string,
  s8?: string,
}