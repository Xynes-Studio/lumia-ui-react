import React, { createContext, useContext, useState } from "react";
import { ModalContentProps, ModalProviderProps } from "./modalContent.types";

const HorizontalModalContext = createContext<ModalContentProps | undefined>(undefined);

const HorizontalModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<React.FC | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const showModal = (component: React.FC, direction: 'left' | 'right' = 'left') => {
    setComponent(() => component);
    setDirection(direction);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setComponent(null);
  };

  return (
    <HorizontalModalContext.Provider value={{ showModal, hideModal, isVisible, Component, direction }}>
      {children}
    </HorizontalModalContext.Provider>
  );
};

const useHorizontalModal = () => {
  const context = useContext(HorizontalModalContext);
  if (context === undefined) {
    throw new Error("useHorizontalModal must be used within a HorizontalModalProvider");
  }
  return context;
};

export { HorizontalModalProvider, useHorizontalModal };
