import React from 'react';
import { useStandardModal } from './StandardModalProvider';
import { useHorizontalModal } from './HorizontalModalProvider';
import { Modal, ModalHorizontalIn } from '@components/index';

export const StandardModal: React.FC = () => {
  const { isVisible, hideModal, Component } = useStandardModal();

  return (
    <Modal
      visible={isVisible}
      onClose={hideModal}
      title="Standard Modal"
      description="This is a standard modal."
    >
      {Component && <Component />}
    </Modal>
  );
};

export const HorizontalModal: React.FC = () => {
  const { isVisible, hideModal, Component, direction } = useHorizontalModal();

  return (
    <ModalHorizontalIn
      visible={isVisible}
      onClose={hideModal}
      direction={direction}
    >
      {Component && <Component />}
    </ModalHorizontalIn>
  );
};
