// Define types for backgrounds and colors
export type backgroundType = {
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