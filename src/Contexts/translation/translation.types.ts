// Define a union type for popular languages
type Language =
  | "en" // English
  | "es" // Spanish
  | "fr" // French
  | "de" // German
  | "zh" // Chinese
  | "ja" // Japanese
  | "ko" // Korean
  | "ru" // Russian
  | "pt" // Portuguese
  | "it" // Italian
  | string; // Any other language as a string

// Use this type in your interface
export interface TranslationContextType {
  translationLang: Language;
  isTranslationEnabled: boolean;
  setTranslationLang: (lang: Language) => void;
  setIsTranslationEnabled: (enabled: boolean) => void;
  translate: (text: string) => Promise<string>;
}
