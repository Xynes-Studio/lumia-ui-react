import React from 'react';

export interface ModalContentProps {
  showModal: (component: React.FC) => void;
  hideModal: () => void;
  isVisible: boolean;
  Component: React.FC | null;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}
