## Description
The `Textarea` component is a customizable and versatile UI element used for capturing multi-line text input. It supports different styles, labels, validation messages, and placeholders. This component is ideal for forms or any other input scenarios where users need to enter longer text.

## Use Case
The `Textarea` component is ideal for:
- Capturing user input in forms.
- Providing an area for comments or feedback.
- Allowing multi-line text entry in applications.

## Props Table

| Prop Name     | Type                                       | Description                                                         | Default Value       | Required |
|---------------|--------------------------------------------|---------------------------------------------------------------------|---------------------|----------|
| `type`        | `"fill" \| "outlined" \| "outline-only"`   | Defines the style of the textarea.                                  | `"fill"`            | No       |
| `label`       | `string`                                   | The label to be displayed above the textarea.                       | `undefined`         | No       |
| `errorMessage`| `string`                                   | The error message to be displayed if validation fails.              | `undefined`         | No       |
| `placeholder` | `string`                                   | The placeholder text for the textarea.                              | `"Enter your text"` | No       |
| `onChange`    | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | Callback function to be called when the textarea value changes. | `undefined`         | No       |
| `value`       | `string`                                   | The current value of the textarea.                                  | `""`                | No       |
| `validations` | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the textarea value.       | `undefined`         | No       |

## Example Use Case

### Example 1: Basic Textarea
A basic textarea for user input.
```jsx
<Textarea
  placeholder="Enter your comments"
  onChange={(e) => console.log(e.target.value)}
  value=""
/>
```