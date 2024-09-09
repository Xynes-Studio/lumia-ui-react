## Description
The `Button` component is a versatile UI element used to trigger actions or events in an application. It supports different styles, icons, and labels, making it highly customizable for various use cases. The component is designed to be easily integrated and styled to match the application's design system.

## Use Case
The `Button` component is ideal for:
- Triggering form submissions.
- Initiating navigation to different parts of an application.
- Performing in-app actions like saving data, opening modals, etc.
- Displaying buttons with icons for enhanced visual appeal.

## Props Table

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"fill" \| "outlined" \| "label"`       | Defines the style of the button.                                    | `"fill"`                  | No       |
| `textCase`       | `"none" \| "capitalize" \| "uppercase" \| "lowercase" \| "initial" \| "inherit"` | Defines the text case transformation for the label.                | `"uppercase"`             | No       |
| `icon`           | `React.FC<AssetProps>`                  | The icon to be displayed in the button.                             | `undefined`               | No       |
| `iconAtEnd`      | `boolean`                               | Whether to display the icon at the end of the button.               | `false`                   | No       |
| `label`          | `string`                                | The text label to be displayed inside the button.                   | `undefined`               | No       |
| `color`          | `string`                                | The color of the text and icon inside the button.                   | `globalColor.foreground`  | No       |
| `backgroundColor`| `string`                                | The background color of the button.                                 | `globalColor.accent100`   | No       |
| `borderColor`    | `string`                                | The border color of the button.                                     | `globalColor?.border100`  | No       |
| `borderRadius`   | `number`                                | The border radius of the button.                                    | `0.3`                     | No       |
| `iconSize`       | `number`                                | The size of the icon inside the button.                             | `0.8`                     | No       |

## Example Use Case

### Example 1: Primary Button
A primary button that triggers a form submission.
```jsx
<Button
  type="fill"
  label="Submit"
  color="#fff"
  backgroundColor="#007bff"
/>
```
