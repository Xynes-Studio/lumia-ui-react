## Description
The `LumiaProvider` component is a higher-order component that wraps around your application to provide global context and functionality for notifications and modals. It uses various providers to manage notifications, standard modals, and horizontal modals, ensuring that these features are available throughout the application.

## Use Case
The `LumiaProvider` component is ideal for:
- Setting up global state and context for notifications and modal dialogs.
- Providing a consistent and centralized way to manage modals and notifications in your application.
- Ensuring that modals and notifications can be accessed and used from any part of the application.

## Props Table

| Prop Name  | Type               | Description                               | Default Value | Required |
|------------|--------------------|-------------------------------------------|---------------|----------|
| `children` | `React.ReactNode`  | The child components to be wrapped by the provider. | `undefined`   | Yes      |

## Example Use Case

### Example 1: Wrapping an Application with LumiaProvider
Wrap your application with the `LumiaProvider` to enable notifications and modals.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import LumiaProvider from "./LumiaProvider";
import App from "./App";

ReactDOM.render(
  <LumiaProvider>
    <App />
  </LumiaProvider>,
  document.getElementById("root")
);
```