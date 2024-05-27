import React from 'react';
import { useStandardModal } from './StandardModalProvider';
import { useHorizontalModal } from './HorizontalModalProvider';
import { Modal, ModalHorizontalIn } from '@components/index';

export const StandardModal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isVisible, hideModal } = useStandardModal();

  return (
    <Modal
      visible={isVisible}
      onClose={hideModal}
      title="Standard Modal"
      description="This is a standard modal."
    >
      {children}
    </Modal>
  );
};

export const HorizontalModal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isVisible, hideModal } = useHorizontalModal();

  return (
    <ModalHorizontalIn
      visible={isVisible}
      onClose={hideModal}
      direction="left"
    >
      {children}
    </ModalHorizontalIn>
  );
};
