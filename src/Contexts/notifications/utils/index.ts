import { v4 as uuidv4 } from "uuid";
import { Notification, Action } from "../notifications.types";

const addNotification = (
  dispatch: React.Dispatch<Action>,
  notification: Omit<Notification, "id" | "date" | "read">
) => {
  dispatch({
    type: "ADD_NOTIFICATION",
    payload: { ...notification, id: uuidv4(), date: new Date(), read: false },
  });
};

const markAsRead = (dispatch: React.Dispatch<Action>, id: string) => {
  dispatch({
    type: "MARK_AS_READ",
    payload: id,
  });
};

export { addNotification, markAsRead };
