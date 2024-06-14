import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useRef,
} from "react";
import axios from "axios";
import { TranslationContextType } from "./translation.types";

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [translationLang, setTranslationLang] = useState("es");
  const [isTranslationEnabled, setIsTranslationEnabled] = useState(false);
  const config = useRef<{ apiTranslateRoute: string } | null>(null);

  const loadConfig = useCallback(async () => {
    try {
      const response = await fetch("/lumia.config.json");
      config.current = await response.json();
    } catch (error) {
      console.error("Configuration file not found:", error);
      config.current = { apiTranslateRoute: "/api/translate" }; // Default value or handle error as needed
    }
  }, []);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  const translate = async (text: string): Promise<string> => {
    if (!config.current) await loadConfig();
    try {
      const response = await axios.post(config.current!.apiTranslateRoute, {
        text,
        targetLang: translationLang,
      });
      return response.data.translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      return "Translation failed.";
    }
  };

  return (
    <TranslationContext.Provider
      value={{
        translationLang,
        isTranslationEnabled,
        setTranslationLang,
        setIsTranslationEnabled,
        translate,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext };
