import React from "react";

export interface ModalContentProps {
  showModal: (component: React.FC, direction?: "left" | "right") => void;
  hideModal: () => void;
  isVisible: boolean;
  Component: React.FC | null;
  direction?: "left" | "right";
}

export interface ModalProviderProps {
  children: React.ReactNode;
}
