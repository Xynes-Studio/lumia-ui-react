import React, { createContext, useContext, useState } from 'react';
import { ModalContentProps, ModalProviderProps } from './modalContent.types';

const HorizontalModalContext = createContext<ModalContentProps | undefined>(undefined);

const HorizontalModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return (
    <HorizontalModalContext.Provider value={{ showModal, hideModal, isVisible }}>
      {children}
    </HorizontalModalContext.Provider>
  );
};

const useHorizontalModal = () => {
  const context = useContext(HorizontalModalContext);
  if (context === undefined) {
    throw new Error('useHorizontalModal must be used within a HorizontalModalProvider');
  }
  return context;
};

export { HorizontalModalProvider, useHorizontalModal };
