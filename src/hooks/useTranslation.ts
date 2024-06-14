// hooks/useTranslation.ts
import { useContext } from 'react';
import { TranslationContext } from '../Contexts/translation/TranslationProvider';
import { TranslationContextType } from '../Contexts/translation/translation.types';

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

