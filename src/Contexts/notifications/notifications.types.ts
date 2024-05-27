// notifications.types.ts

export interface Notification {
  id: string;
  type: "default" | "flat" | "outlined"; // Adjusted to match AlertProps type
  title: string;
  description?: string;
  date: Date;
  read: boolean;
}

export interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  newNotification: Notification | null; // Ensure this is nullable
}

export interface AddNotificationAction {
  type: "ADD_NOTIFICATION";
  payload: Notification;
}

export interface MarkAsReadAction {
  type: "MARK_AS_READ";
  payload: string;
}

export type Action = AddNotificationAction | MarkAsReadAction;

export interface NotificationContextProps {
  notifications: NotificationState;
  dispatch: React.Dispatch<Action>;
}
