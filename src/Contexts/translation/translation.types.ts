export interface TranslationContextType {
    translationLang: string;
    isTranslationEnabled: boolean;
    setTranslationLang: (lang: string) => void;
    setIsTranslationEnabled: (enabled: boolean) => void;
    translate: (text: string) => Promise<string>;
  }
  