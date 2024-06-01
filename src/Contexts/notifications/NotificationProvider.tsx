// NotificationProvider.tsx
import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Notification,
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

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

const addNotification = (
  dispatch: React.Dispatch<Action>,
  notification: Omit<Notification, 'id' | 'date' | 'read'>
) => {
  dispatch({
    type: 'ADD_NOTIFICATION',
    payload: { ...notification, id: uuidv4(), date: new Date(), read: false },
  });
};

const markAsRead = (dispatch: React.Dispatch<Action>, id: string) => {
  dispatch({
    type: 'MARK_AS_READ',
    payload: id,
  });
};

export { NotificationProvider, useNotification, addNotification, markAsRead };
