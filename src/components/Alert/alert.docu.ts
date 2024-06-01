const meta = {
  title: "Component/Alert",
  parameters: {
    docs: {
      description:
        "The `Alert` component is used to display important messages to the user. It can be configured to show different types of alerts, such as success, warning, or error. It also supports icons, titles, descriptions, and actions, making it highly customizable for various use cases.",
      md: '#### Use Case\\nThis component is suitable for displaying notifications, warnings, errors, or any important information that requires the user\'s attention. It can be integrated into various parts of an application where user feedback or system messages need to be conveyed effectively.\\n\\n#### Props Table\\n\\n| Prop Name        | Type                          | Description                                                         | Default Value             | Required |\\n|------------------|-------------------------------|---------------------------------------------------------------------|---------------------------|----------|\\n| `type`           | \\"flat\\" \\| \\"outlined\\" \\| \\"default\\" | Defines the style of the alert.                                      | \\"default\\"               | No       |\\n| `status`         | \\"success\\" \\| \\"warning\\" \\| \\"error\\" | Defines the status of the alert which dictates its color scheme.     | `undefined`               | No       |\\n| `showIcon`       | `boolean`                     | Whether to show an icon in the alert.                                | `false`                   | No       |\\n| `icon`           | `React.FC<AssetProps>`        | The icon to be displayed in the alert.                               | `LmCkAdd`                 | No       |\\n| `showCloseIcon`  | `boolean`                     | Whether to show a close icon in the alert.                           | `undefined`               | No       |\\n| `onClose`        | `() => void`                  | Callback function to be called when the close icon is clicked.       | `undefined`               | No       |\\n| `title`          | `string`                      | The title of the alert message.                                      | \\"Alert Message Title\\"   | No       |\\n| `description`    | `string`                      | Additional description for the alert message.                        | `undefined`               | No       |\\n| `actionBtn`      | `boolean`                     | Whether to show an action button in the alert.                       | `undefined`               | No       |\\n| `actionBtnLabel` | `string`                      | The label for the action button.                                     | `undefined`               | No       |\\n| `actionBtnOnPress` | `() => void`               | Callback function to be called when the action button is pressed.    | `undefined`               | No       |\\n\\n#### Example Usage\\n```jsx\\nimport { Alert } from \\"./alert\\";\\n\\nconst MyComponent = () => {\\n  return (\\n    <Alert\\n      type=\\"outlined\\"\\n      status=\\"warning\\"\\n      showIcon={true}\\n      title=\\"Warning Alert\\"\\n      description=\\"This is a warning alert with an icon and an action button.\\"\\n      showCloseIcon={true}\\n      onClose={() => console.log(\\"Alert closed\\")\\n      actionBtn={true}\\n      actionBtnLabel=\\"Take Action\\"\\n      actionBtnOnPress={() => console.log(\\"Action button pressed\\")\\n    >\\n      <p>Additional content can go here.</p>\\n    </Alert>\\n  );\\n};\\n```\\n',
    },
  },
};
