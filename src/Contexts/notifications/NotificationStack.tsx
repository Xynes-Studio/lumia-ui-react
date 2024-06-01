// NotificationStack.tsx
import React, { useEffect, useState } from "react";
import { useNotification, markAsRead } from "./NotificationProvider";
import { Alert } from "@components/index";
import { Notification } from "./notifications.types";

const NotificationStack: React.FC = () => {
  const { notifications, dispatch } = useNotification();
  const [visibleNotification, setVisibleNotification] =
    useState<Notification | null>(null);

  useEffect(() => {
    if (notifications.newNotification) {
      setVisibleNotification(notifications.newNotification);
      setTimeout(() => {
        setVisibleNotification(null);
      }, 3000); // Adjust the timeout duration as needed
    }
  }, [notifications.newNotification]);

  if (!visibleNotification) {
    return null;
  }

  return (
    <div className="notification-stack">
      <Alert
        key={visibleNotification.id}
        type={visibleNotification.type}
        title={visibleNotification.title}
        description={visibleNotification.description}
        icon={visibleNotification.icon}
        onClose={() => {
          markAsRead(dispatch, visibleNotification.id);
          setVisibleNotification(null);
        }}
      />
    </div>
  );
};

export default NotificationStack;
