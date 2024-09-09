## Description
The `PinInput` component is a customizable UI element used for capturing multi-digit inputs, such as PIN codes or verification codes. It supports different input styles, secret mode for sensitive inputs, and validation mechanisms. This component is ideal for applications requiring secure and user-friendly PIN or code entry.

## Use Case
The `PinInput` component is ideal for:
- Capturing PIN codes for authentication.
- Inputting verification codes sent via SMS or email.
- Securely entering multi-digit passwords or access codes.

## Props Table

| Prop Name       | Type                                       | Description                                                        | Default Value     | Required |
|-----------------|--------------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `fillType`      | `"fill" \| "transparent" \| "outlined" \| "bottom"` | Defines the style of the input fields.                              | `"fill"`          | No       |
| `numberOfFields`| `4 \| 5 \| 6`                              | The number of input fields.                                         | `4`               | No       |
| `onValueChange` | `(pinValue: string) => void`               | Callback function to be called when the PIN value changes.          | `undefined`       | Yes      |
| `value`         | `string`                                   | The current value of the PIN input.                                 | `""`              | Yes      |
| `label`         | `string`                                   | The label to be displayed above the input fields.                   | `""`              | No       |
| `labelPosition` | `'center' \| 'start' \| 'end'`             | The alignment of the label.                                         | `'start'`         | No       |
| `validations`   | `((...args: unknown[]) => void)[]`         | Array of validation functions to validate the PIN value.            | `undefined`       | No       |
| `secret`        | `boolean`                                  | Whether to hide the input values (e.g., for PIN or password entry). | `false`           | No       |

## Example Use Case

### Example 1: Basic PIN Input
A basic PIN input with 4 fields.
```jsx
<PinInput
  value="1234"
  onValueChange={(pin) => console.log(pin)}
/>
```