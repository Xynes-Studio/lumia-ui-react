## Description
The `TextInput` component is a customizable and versatile UI element used for capturing single-line text input. It supports different input types, styles, labels, validation messages, and placeholders. This component is ideal for forms or any other input scenarios where users need to enter text.

## Use Case
The `TextInput` component is ideal for:
- Capturing user input in forms.
- Providing an input field for passwords, emails, numbers, or plain text.
- Displaying validation messages for user input.

## Props Table

| Prop Name     | Type                                       | Description                                                         | Default Value       | Required |
|---------------|--------------------------------------------|---------------------------------------------------------------------|---------------------|----------|
| `type`        | `"fill" \| "outlined" \| "outline-only"`   | Defines the style of the text input.                                | `"fill"`            | No       |
| `inputType`   | `"text" \| "number" \| "password" \| "email"` | Defines the type of input.                                           | `"text"`            | No       |
| `label`       | `string`                                   | The label to be displayed above the text input.                     | `undefined`         | No       |
| `errorMessage`| `string`                                   | The error message to be displayed if validation fails.              | `undefined`         | No       |
| `placeholder` | `string`                                   | The placeholder text for the text input.                            | `"Enter your text"` | No       |
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback function to be called when the text input value changes. | `undefined`         | No       |
| `value`       | `string`                                   | The current value of the text input.                                | `""`                | No       |
| `validations` | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the text input value.     | `undefined`         | No       |

## Example Use Case

### Example 1: Basic TextInput
A basic text input for user input.
```jsx
<TextInput
  placeholder="Enter your name"
  onChange={(e) => console.log(e.target.value)}
  value=""
/>
```