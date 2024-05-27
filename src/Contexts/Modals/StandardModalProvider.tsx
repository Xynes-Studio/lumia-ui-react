import React, { createContext, useContext, useState } from 'react';
import { ModalContentProps, ModalProviderProps } from './modalContent.types';

const StandardModalContext = createContext<ModalContentProps | undefined>(undefined);

const StandardModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return (
    <StandardModalContext.Provider value={{ showModal, hideModal, isVisible }}>
      {children}
    </StandardModalContext.Provider>
  );
};

const useStandardModal = () => {
  const context = useContext(StandardModalContext);
  if (context === undefined) {
    throw new Error('useStandardModal must be used within a StandardModalProvider');
  }
  return context;
};

export { StandardModalProvider, useStandardModal };
