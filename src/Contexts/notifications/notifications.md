# NotificationProvider Component Documentation

## Description
The `NotificationProvider` component is a context provider that manages the state and functionality for notifications in your application. It uses a reducer to handle actions such as adding a new notification and marking notifications as read. This provider makes it easy to manage and display notifications across your application.

## Use Case
The `NotificationProvider` component is ideal for:
- Managing application-wide notifications.
- Keeping track of unread notifications and displaying them in a user interface.
- Providing a centralized way to add, update, and read notifications.

## Props Table

### NotificationProvider
| Prop Name  | Type               | Description                               | Default Value | Required |
|------------|--------------------|-------------------------------------------|---------------|----------|
| `children` | `React.ReactNode`  | The child components to be wrapped by the provider. | `undefined`   | Yes      |

### Notification
| Prop Name   | Type                           | Description                                                         | Default Value | Required |
|-------------|--------------------------------|---------------------------------------------------------------------|---------------|----------|
| `id`        | `string`                       | Unique identifier for the notification.                             | `undefined`   | Yes      |
| `type`      | `"default" \| "flat" \| "outlined"`| Type of notification style.                                       | `"default"`   | No       |
| `title`     | `string`                       | Title of the notification.                                          | `undefined`   | Yes      |
| `description`| `string`                      | Description of the notification.                                    | `undefined`   | No       |
| `date`      | `Date`                         | Date when the notification was created.                             | `undefined`   | Yes      |
| `read`      | `boolean`                      | Whether the notification has been read.                             | `false`       | Yes      |
| `icon`      | `React.FC<AssetProps>`         | Icon to be displayed with the notification.                         | `undefined`   | No       |
| `image`     | `string`                       | Image to be displayed with the notification.                        | `undefined`   | No       |

## Example Use Case

### Example 1: Using NotificationProvider
Wrap your application with the `NotificationProvider` to enable notifications.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationProvider } from './NotificationProvider';
import App from './App';

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root')
);
```