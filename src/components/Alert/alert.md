## Description
The `Alert` component is used to display important messages to the user. It can be configured to show different types of alerts, such as success, warning, or error. It also supports icons, titles, descriptions, and actions, making it highly customizable for various use cases.

## Use Case
This component is suitable for displaying notifications, warnings, errors, or any important information that requires the user's attention. It can be integrated into various parts of an application where user feedback or system messages need to be conveyed effectively.

## Props Table

| Prop Name        | Type                          | Description                                                         | Default Value             | Required |
|------------------|-------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"flat" \| "outlined" \| "default"` | Defines the style of the alert.                                      | `"default"`               | No       |
| `status`         | `"success" \| "warning" \| "error"` | Defines the status of the alert which dictates its color scheme.     | `undefined`               | No       |
| `showIcon`       | `boolean`                     | Whether to show an icon in the alert.                                | `false`                   | No       |
| `icon`           | `React.FC<AssetProps>`        | The icon to be displayed in the alert.                               | `LmCkAdd`                 | No       |
| `showCloseIcon`  | `boolean`                     | Whether to show a close icon in the alert.                           | `undefined`               | No       |
| `onClose`        | `() => void`                  | Callback function to be called when the close icon is clicked.       | `undefined`               | No       |
| `title`          | `string`                      | The title of the alert message.                                      | `"Alert Message Title"`   | No       |
| `description`    | `string`                      | The description or detailed message of the alert.                    | `undefined`               | No       |
| `actionBtn`      | `boolean`                     | Whether to show an action button in the alert.                       | `false`                   | No       |
| `actionBtnLabel` | `string`                      | The label for the action button if `actionBtn` is true.              | `undefined`               | No       |
| `actionBtnOnPress`| `() => void`                 | Callback function to be called when the action button is pressed.    | `undefined`               | No       |