// context/notificationContext.tsx
import React, { createContext, useReducer } from 'react';
import {
  NotificationState,
  Action,
  NotificationContextProps,
} from './notifications.types';

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

const notificationReducer = (state: NotificationState, action: Action): NotificationState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
        unreadCount: state.unreadCount + 1,
        newNotification: action.payload, // Set newNotification state
      };
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload ? { ...notification, read: true } : notification
        ),
        unreadCount: state.notifications.filter((notification) => !notification.read).length,
      };
    default:
      return state;
  }
};

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, dispatch] = useReducer(notificationReducer, {
    notifications: [],
    unreadCount: 0,
    newNotification: null, // Initialize newNotification state
  });

  return (
    <NotificationContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
