import React, { createContext, useContext, useState } from "react";
import { ModalContentProps, ModalProviderProps } from "./modalContent.types";

const StandardModalContext = createContext<ModalContentProps | undefined>(undefined);

const StandardModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<React.FC | null>(null);

  const showModal = (component: React.FC) => {
    setComponent(() => component);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setComponent(null);
  };

  return (
    <StandardModalContext.Provider
      value={{ showModal, hideModal, isVisible, Component }}
    >
      {children}
    </StandardModalContext.Provider>
  );
};

const useStandardModal = () => {
  const context = useContext(StandardModalContext);
  if (context === undefined) {
    throw new Error("useStandardModal must be used within a StandardModalProvider");
  }
  return context;
};

export { StandardModalProvider, useStandardModal };
