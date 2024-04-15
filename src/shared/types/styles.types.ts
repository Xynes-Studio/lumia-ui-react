export interface backgroundType {
  app: string;
  appInverse: string;
  positive: string;
  negative: string;
  warning: string;
}
export interface colorTypes {
  primary: string; // coral
  secondary: string; // ocean
  tertiary: string;

  orange: string;
  gold: string;
  green: string;
  seaFoam: string;
  purple: string;
  ultraviolet: string;
  skyblue1: string;
  seagreen: string;

  // Monochrome
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
  border1: string;

  // Status
  positive: string;
  negative: string;
  warning: string;

  //Input
  input100: string;
  //brand
  brand100: string;

  //error
  error100: string,
}

export interface spacingOBTTypes {
  s0: string;
  small: string;
  small1: string;
  medium: string;
  large: string;
}
export interface spacingTypes {
  padding: spacingOBTTypes;
  borderRadius: spacingOBTTypes;
}
