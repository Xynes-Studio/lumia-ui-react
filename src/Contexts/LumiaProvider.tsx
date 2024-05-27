import React from 'react';
import { NotificationProvider } from './notifications/NotificationProvider';
import { StandardModalProvider } from './Modals/StandardModalProvider';
import { HorizontalModalProvider } from './Modals/HorizontalModalProvider';
import { HorizontalModal, StandardModal } from './Modals';

const LumiaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NotificationProvider>
      <StandardModalProvider>
        <HorizontalModalProvider>
          {children}
        </HorizontalModalProvider>
      </StandardModalProvider>
      <StandardModal />
      <HorizontalModal />
    </NotificationProvider>
  );
};

export default LumiaProvider;
