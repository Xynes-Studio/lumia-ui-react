## ThemeProvider Documentation

### Description

The `ThemeProvider` component is designed to manage theme-related properties in your application, allowing you to toggle between light and dark themes. It leverages `styled-components` for theming and provides a context for accessing and modifying the current theme throughout your application.

### Use Case

Use the `ThemeProvider` to wrap your application's root component. This enables you to define and switch between different themes (e.g., light and dark) easily. The `useTheme` hook can be utilized in any component within the `ThemeProvider` to access the current theme and toggle between themes.

### Props Table

| Prop Name | Type               | Description                               | Default Value | Required |
|-----------|--------------------|-------------------------------------------|---------------|----------|
| theme     | `Theme`            | The theme object to be used for styling   | `defaultTheme`| Yes      |
| children  | `ReactNode`        | The child components to be wrapped by the provider | N/A           | Yes      |

### Example Use Case

Here's an example of how you can use the `ThemeProvider` and `useTheme` hook in your application:

```typescript
import React from "react";
import { ThemeProvider, useTheme } from "./themeProvider";
import { defaultTheme } from "./themeProvider.constants";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: theme.background.app, color: theme.color.foreground }}>
        <h1>Hello, World!</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
};

export default App;```
