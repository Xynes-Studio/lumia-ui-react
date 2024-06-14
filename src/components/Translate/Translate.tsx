'use client';
import React, { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "@hooks/useTranslation";

interface TranslateProps {
  children: ReactNode;
}

const Translate: React.FC<TranslateProps> = ({ children }) => {
  const { isTranslationEnabled, translate } = useTranslation();
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    if (children) {
      const translateText = async () => {
        if (isTranslationEnabled) {
          const text = children.toString();
          const result = await translate(text);
          setTranslatedText(result);
        } else {
          setTranslatedText(children.toString());
        }
      };

      translateText();
    }
  }, [children, isTranslationEnabled, translate]);

  return <>{translatedText}</>;
};

export default Translate;
