import React from 'react';

export interface ModalContentProps {
  showModal: () => void;
  hideModal: () => void;
  isVisible: boolean;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}
