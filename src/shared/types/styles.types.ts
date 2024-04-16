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

  //Input
  input100: string;
  //brand
  accent100: string;
  accent200: string;
  accent300: string;

  //status
  error: string;
  warning: string;
  positive: string;
}

export interface paddingTypes {
  p0: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}
export interface borderRadiusTypes {
  r0: string;
  r1: string;
  r2: string;
  r3: string;
  r4: string;
  r5: string;
}
export interface spacingTypes {
  padding: paddingTypes;
  borderRadius: borderRadiusTypes;
}
